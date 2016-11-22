angular.module('app.controllers', [])
 
//launch 頁面   
.controller('launchCtrl', function ($scope, $stateParams, $ionicSlideBoxDelegate) {
	$scope.options = {
	  loop: true,
	  speed: 1000,
	  autoplay:2000,
	  pagination:false
	};

})


//主題路線  
.controller('subjectCtrl',function ($scope, $stateParams) {


})
   
//旅遊資訊   
.controller('infoCtrl', function ($scope, $stateParams) {
	

})
   
//宜蘭特色   
.controller('featureCtrl', function ($scope, $stateParams) {


})
      
//在地故事
.controller('storyCtrl', function ($scope, $stateParams) {


})
 
//景點介紹   
.controller('sceneCtrl', function ($scope, $stateParams) {


})
 
//意見反饋   
.controller('feedbackCtrl',function ($scope, $stateParams) {
	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    	viewData.enableBack = true;
	});
})
 
//景點內容   
.controller('scene_detailCtrl',function ($scope, $stateParams) {

	$scope.options = {
	  loop: true
	};

	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    	viewData.enableBack = true;
	});

})
 

//選單      
// .controller('menuCtrl', function ($scope, $stateParams) {
// }) 