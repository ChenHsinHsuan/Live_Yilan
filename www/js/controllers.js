
var database = firebase.database(),
	storage = firebase.storage();

angular.module('app.controllers', [])

//launch 頁面
.controller('launchCtrl', function ($rootScope, $scope, $stateParams, $ionicSlideBoxDelegate, $ionicLoading, $state) {

	$scope.options = {
	  loop: true,
	  speed: 1000,
	  autoplay:2000,
	  pagination:false
	};


	var launchType = 'morning',
	    pathReference = '',
	    currentdate = new Date(),
		time = ''+currentdate.getHours()+ currentdate.getMinutes() + currentdate.getSeconds();

	console.log('current time:'+time );
	// 早 040000~115959
	// 中 120000~195959
	// 晚 200000~035959
	if (parseInt(time) >= 40000 && parseInt(time) < 120000) {
		//早
		launchType = 'morning';
	}else if (parseInt(time) >= 120000 && parseInt(time) < 200000) {
		//中
		launchType = 'noon';
	}else{
		//晚
		launchType = 'night';
	}

	console.log('launchType:'+launchType );

 	$rootScope.pics = [];
	$ionicLoading.show({
      template: '連線中...',
      duration: 3000
    }).then(function(){
		database.ref('/首頁/'+launchType).once('value').then(function(snapshot){
		    // console.log('snapshot:'+snapshot.val());
		    snapshot.forEach(function(data){
	          	$scope.pics.push(data.val());
		    });
		    $ionicLoading.hide();
		});
	});

	// $scope.$on('$ionicView.afterEnter', function () {
 //  		$state.go($state.current);
	// });
})


//主題路線
.controller('subjectCtrl',function ($rootScope, $scope, $stateParams, $ionicScrollDelegate, $ionicPopup, $ionicLoading, $state) {
	$scope.itemList = [];

	$ionicLoading.show({
      template: '讀取中...',
      duration: 10000
    }).then(function(){
        firebase.database().ref('/主題路線')
        .once('value')
        .then(function(snapshot) {


        	var categoryList = [];

			snapshot.forEach(function(categoryData){
				// console.log(JSON.stringify(categoryData.val()) );
				var sceneList = [];

				categoryData.child('list').forEach(function(sceneData){

					var theScene = {
						id:sceneData.child('id').val(),
						title:sceneData.child('title').val(),
						photo:sceneData.child('photo').val()
					}
					// console.log('theScene:'+JSON.stringify(theScene));
					sceneList.push(theScene);

				});
				var theCategory = {
						title:categoryData.child('subject').val(),
						list:sceneList
					}
				categoryList.push(theCategory);

		  		$scope.categoryList = categoryList;


			});
			$ionicLoading.hide();
		});
    });


  //   $scope.fetchPhoto = function(photo_file_name){
  //   	console.log('photo_file_name:'+photo_file_name);
		// // var url = return storage.ref('/景點基準檔/'+photo_file_name).getDownloadURL().then(function(url) {
		// // 	      console.log("la url ", url)  ;
		// // 	      return url;
		// // 	    });

		// $scope.url = refspaedtServ.once("value").then(function(snapshot) {
		//     return snapshot.val().fotoUrl;
		//  });

		// console.log('url:'+url.val());
  //   }
 //  	$scope.$on('$ionicView.afterEnter', function () {
 //  		$state.go($state.current, {}, {reload: true});
	// });
})

//旅遊資訊
.controller('infoCtrl', function ($scope, $stateParams, $ionicLoading) {
	$scope.itemList = [];

	$ionicLoading.show({
      template: '讀取中...',
      duration: 3000
    }).then(function(){
       firebase.database().ref('/旅遊資訊')
       .once('value')
       .then(function(snapshot) {
		// console.log('snapshot.val():'+JSON.stringify(snapshot.val()));
			snapshot.forEach(function(data){
				console.log('data:'+JSON.stringify(data.val()));
		  		$scope.itemList.push(data.val());
			});
			$ionicLoading.hide();
		});
    });

    $scope.banners = ['ClimateAndTemperature.png', "LocalSpecialties.png" , "TravelFun.png", 'DisinctiveB&B.png', "PopulationAndTopography.png"];
})

//宜蘭特色
.controller('featureCtrl', function ($scope, $stateParams, $ionicLoading) {

	$scope.itemList = [];

	$ionicLoading.show({
      template: '讀取中...',
      duration: 3000
    }).then(function(){
       firebase.database().ref('/宜蘭特色')
       .once('value')
       .then(function(snapshot) {
		// console.log('snapshot.val():'+JSON.stringify(snapshot.val()));
			snapshot.forEach(function(data){
				console.log('data:'+JSON.stringify(data.val()));
		  		$scope.itemList.push(data.val());
			});
			$ionicLoading.hide();
		});
    });

	$scope.banners = ['play.png', 'tasty.png', 'relax.png', 'heaven.png', 'nice.png'];
})

//在地故事
.controller('storyCtrl', function ($scope, $stateParams, $ionicLoading) {
	$scope.itemList = [];

	$ionicLoading.show({
      template: '讀取中...',
      duration: 3000
    }).then(function(){
       firebase.database().ref('/在地故事')
       .once('value')
       .then(function(snapshot) {
		// console.log('snapshot.val():'+JSON.stringify(snapshot.val()));
			snapshot.forEach(function(data){
				// console.log('data:'+JSON.stringify(data.val()));
		  		$scope.itemList.push(data.val());
			});
			$ionicLoading.hide();
		});
    });


})

//景點類型
.controller('sceneCtrl', function ($scope, $stateParams, $ionicScrollDelegate, $ionicPopup, $ionicLoading) {
	$scope.itemList = [];


	 $ionicLoading.show({
      template: '讀取中...',
      duration: 10000
    }).then(function(){
       firebase.database().ref('/景點類型/')
       .once('value')
       .then(function(snapshot) {
		console.log('snapshot.val():'+JSON.stringify(snapshot.val()));
			snapshot.forEach(function(data){
				// console.log('data:'+JSON.stringify(data.val()));
				// console.log(JSON.stringify(data.child('list').val()));
				var sceneList = [];

				data.child('list').forEach(function(sceneData){
					var id = sceneData.child('id').val(),
						title = sceneData.child('title').val(),
						photo = sceneData.child('photo').val(),
						pathReference = storage.ref('/景點基準檔/'+photo);

				    // pathReference.getDownloadURL().then(function(url) {

				        var scene = {
							id:id,
							title:title,
							photo:photo,
							// url:url
						}
						// console.log('object:'+JSON.stringify(scene));
						sceneList.push(scene);
				  //   }).catch(function(error) {
				  //       // If anything goes wrong while getting the download URL, log the error
				  //       console.error('error:'+error);
				  //   });
				});

				var category = {
					subject:data.child('subject').val(),
					list:sceneList
				}

		  		$scope.itemList.push(category);
			});
			$ionicLoading.hide();
		});


    });

})

//意見反饋
.controller('feedbackCtrl',function ($scope, $stateParams) {
	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    	viewData.enableBack = true;
	});
})

//景點內容
.controller('scene_detailCtrl',function ($scope, $stateParams, $ionicLoading) {

	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    	viewData.enableBack = true;
	});

	$scope.itemList = [];
	console.log('$stateParams.sceneid:'+$stateParams.sceneid);
 	$ionicLoading.show({
	      template: '讀取中...',
	      duration: 3000
    }).then(function(){
       firebase.database().ref('/景點基準檔/'+$stateParams.sceneid)
       .once('value')
       .then(function(snapshot) {
			      // console.log('snapshot.val():'+JSON.stringify(snapshot.val()));

            $scope.title = snapshot.child('title').val();
            $scope.audio = {
               url: snapshot.child('audio').val()
            }

             $scope.audio_en = {
               url: snapshot.child('audio_en').val()
             }


            snapshot.child('data').forEach(function(data){
              console.log('data:'+JSON.stringify(data.val()));
                $scope.itemList.push(data.val());
            });
            $ionicLoading.hide();
        });
    });

	$scope.$on('$ionicView.beforeLeave', function() {
		console.log('123');
        MediaManager.stop();
    });

})


//選單
// .controller('menuCtrl', function ($scope, $stateParams) {
// })
