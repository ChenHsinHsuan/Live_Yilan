
var database = firebase.database(),
	storage = firebase.storage();

angular.module('app.controllers', [])
 
//launch 頁面   
.controller('launchCtrl', function ($rootScope, $scope, $stateParams, $ionicSlideBoxDelegate, $ionicLoading) {
	
	$scope.options = {
	  loop: true,
	  speed: 1000,
	  autoplay:2000,
	  pagination:false
	};


	//1.撈取資料庫看有哪些圖檔
	var launchType = 'morning',
	    pathReference = '';
	  
 	$rootScope.pics = [];
	$ionicLoading.show({
      template: '連線中...',
      duration: 10000
    }).then(function(){
	  database.ref('/首頁/'+launchType)
	  .once('value')
	  .then(function(snapshot){
	    console.log('snapshot:'+snapshot.val());

	    

	    snapshot.forEach(function(data){
	    	$scope.pics.push(data.val());
	    //   pathReference = storage.ref('/launch/'+data.val());
	    //   pathReference.getDownloadURL().then(function(url) {
	          // $scope.pics.push(url);
	    //   }).catch(function(error) {
	    //       // If anything goes wrong while getting the download URL, log the error
	    //       console.error('error:'+error);
	    //   });
	    });
	    $ionicLoading.hide();
	  });
	});
})


//主題路線  
.controller('subjectCtrl',function ($rootScope, $scope, $stateParams, $ionicScrollDelegate, $ionicPopup, $ionicLoading, $state) {
	$scope.itemList = [];

	$ionicLoading.show({
      template: '讀取中...',
      duration: 10000
    }).then(function(){
        firebase.database().ref('/主題路線').once('value').then(function(snapshot) {
			snapshot.forEach(function(data){
				var sceneList = [];
		
				data.child('list').forEach(function(sceneData){
					var id = sceneData.child('id').val(),
						title = sceneData.child('title').val(),
						photo = sceneData.child('photo').val(),
						pathReference = storage.ref('/景點基準檔/'+photo);
					
				    // pathReference.getDownloadURL().then(function(url) {
				        // console.log('photo url:'+url);
				        var scene = {
							id:id,
							title:title,
							photo:photo,
							// url:url
						}
						console.log('object:'+JSON.stringify(scene));
						sceneList.push(scene);
				    // }).catch(function(error) {
				    //     // If anything goes wrong while getting the download URL, log the error
				    //     console.error('error:'+error);
				    // });
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
				console.log('data:'+JSON.stringify(data.val()));
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
		console.log('snapshot.val():'+JSON.stringify(snapshot.val()));

	  		$scope.title = snapshot.child('title').val();

			snapshot.child('data').forEach(function(data){
				// console.log('data:'+JSON.stringify(data.val()));
		  		$scope.itemList.push(data.val());
			});
			$ionicLoading.hide();
		});
    });

 
})
 

//選單      
// .controller('menuCtrl', function ($scope, $stateParams) {
// }) 