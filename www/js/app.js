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

.run(function($ionicPlatform, $rootScope, $ionicPopup, $state) {
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
    $ionicPopup.alert({
         title: '施工中',
         template: '等待問卷填寫完成...'
    });
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