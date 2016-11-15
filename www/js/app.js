// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider){
   $ionicConfigProvider.backButton.text('');
   // $ionicConfigProvider.backButton.previousTitleText(true);
})

.run(function($ionicPlatform, $rootScope, $state, $ionicSideMenuDelegate) {
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



  $rootScope.backMain = function(){
    console.log('backMain button pressed...');
    $state.go('mainPage');
  }


  $rootScope.toggleLeftSideMenu = function(){
    console.log('left menubar is opened...');
    $ionicSideMenuDelegate.toggleLeft(true);      
  }

  $rootScope.sideMenuList = [
      {title:'主畫面', link:'mainPage', icon:'2'},
      {title:'體驗類', link:'experience', icon:'2'},
      {title:'住宿類', link:'living', icon:'3'},
      {title:'餐飲類', link:'restaurant', icon:'4'},
      {title:'達人類', link:'expert', icon:'4'}
    ];

  $rootScope.doSideBarMenuItemClick = function(){
      $ionicSideMenuDelegate.toggleLeft(false);      
  }



})