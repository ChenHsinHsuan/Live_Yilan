
var database = firebase.database();

angular.module('app.controllers', [])
 
//launch 頁面   
.controller('launchCtrl', function ($rootScope, $scope, $stateParams, $ionicSlideBoxDelegate) {
	
	$scope.options = {
	  loop: true,
	  speed: 1000,
	  autoplay:2000,
	  pagination:false
	};

	$scope.repeatDone = function() {
	  $ionicSlideBoxDelegate.update();
	};
})


//主題路線  
.controller('subjectCtrl',function ($rootScope, $scope, $stateParams, $ionicScrollDelegate, $ionicPopup, $ionicLoading, $state) {
	$scope.itemList = [];
	$ionicLoading.show({
      template: '讀取中...',
      duration: 3000
    }).then(function(){
       firebase.database().ref('/主題路線')
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


    $rootScope.doDetail = function(sceneid){
		console.log('scene id:'+sceneid+' pressed...');
		 $state.go('scene_detail', {sceneid:sceneid});
	};

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
      duration: 3000
    }).then(function(){
       firebase.database().ref('/景點類型')
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


	// $scope.doDetail = function(){
	// 	console.log('detail button pressed...');
	// 	 var alertPopup = $ionicPopup.alert({
	// 	     title: '施工中...',
	// 	     template: '景點詳細資料建置中...'
	// 	   });

	// 	   alertPopup.then(function(res) {
	// 	     console.log('Thank you for not eating my delicious ice cream cone');
	// 	   });
	// };

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
			snapshot.child('data').forEach(function(data){
				console.log('data:'+JSON.stringify(data.val()));
		  		$scope.itemList.push(data.val());
			});
			$ionicLoading.hide();
		});
    });
})
 

//選單      
// .controller('menuCtrl', function ($scope, $stateParams) {
// }) 