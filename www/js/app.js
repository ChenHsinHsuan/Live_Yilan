// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'ionicLazyLoad', 'ionic-audio','app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  
  $ionicConfigProvider.tabs.position('bottom'); // other values: top
  $ionicConfigProvider.views.swipeBackEnabled(false);
})

.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

.run(function($ionicPlatform, $rootScope, $ionicPopup, $state, $ionicModal) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });


  $rootScope.doDetail = function(sceneid){
    console.log('scene id:'+sceneid+' pressed...');
     $state.go('scene_detail', {sceneid:sceneid});
  };

  $rootScope.doFeetback = function(){
    // $ionicPopup.alert({
    //      title: '意見反饋',
    //      template: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeWfE1pLdw-hZ9iHxy_Kpi_oT7bT-E5BSZNoM-RCC99XJIJIQ/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>',
    //      okText: '取消'
    // });

      $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $rootScope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $rootScope.modal = modal;
        $rootScope.modal.show();
      });    
  }

  $rootScope.doModalRemove = function() {
    $rootScope.modal.remove();
  }

})


  

// .directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
//     return {
//         restrict: "A",  
//         controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

//             function stopDrag(){
//               $ionicSideMenuDelegate.canDragContent(false);
//             }

//             function allowDrag(){
//               $ionicSideMenuDelegate.canDragContent(true);
//             }

//             $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
//             $element.on('touchstart', stopDrag);
//             $element.on('touchend', allowDrag);
//             $element.on('mousedown', stopDrag);
//             $element.on('mouseup', allowDrag);

//         }]
//     };
// }])