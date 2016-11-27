// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider, $sceDelegateProvider){
  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);
  
  $ionicConfigProvider.tabs.position('bottom'); // other values: top
  $ionicConfigProvider.views.swipeBackEnabled(false);
})

.run(function($ionicPlatform, $rootScope) {
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



  //1.撈取資料庫看有哪些圖檔
  var database = firebase.database(), 
    storage = firebase.storage(),
    launchType = 'morning';
  
  $rootScope.pics = [];

  database.ref('/launch/'+launchType)
  .once('value')
  .then(function(snapshot){
    // console.log('snapshot:'+snapshot.val());
    snapshot.forEach(function(data){
      var pathReference = storage.ref('/launch/'+data.val());

      pathReference.getDownloadURL().then(function(url) {
        // console.log('pathReference:'+pathReference);
          // console.log('url:'+url);
          $rootScope.pics.push(url);
          // $ionicSlideBoxDelegate.update();
      }).catch(function(error) {
          // If anything goes wrong while getting the download URL, log the error
          console.error('error:'+error);
      });
    });
  });




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