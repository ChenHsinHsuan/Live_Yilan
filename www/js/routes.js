angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('launchPage', {
    url: '/launchPage',
    templateUrl: 'templates/launchPage.html',
    controller: 'launchPageCtrl'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/listTemplate.html',
    controller: 'menuCtrl'
  })

  .state('impression', {
    url: '/impression',
    templateUrl: 'templates/listTemplate.html',
    controller: 'impressionCtrl'
  })

  .state('basic', {
    url: '/basic',
    templateUrl: 'templates/detailTemplate.html',
    controller: 'basicCtrl'
  })

  .state('traffic', {
    url: '/traffic',
    templateUrl: 'templates/detailTemplate.html',
    controller: 'trafficCtrl'
  })

  .state('story', {
    url: '/story',
    templateUrl: 'templates/detailTemplate.html',
    controller: 'storyCtrl'
  })

  .state('feature', {
    url: '/feature',
    templateUrl: 'templates/detailTemplate.html',
    controller: 'featureCtrl'
  })

  .state('community', {
    url: '/community',
    templateUrl: 'templates/community.html',
    controller: 'communityCtrl'
  })

  .state('travel-wiki', {
    url: '/travel-wiki',
    templateUrl: 'templates/detailTemplate.html',
    controller: 'travelwikiCtrl'
  })

  .state('community-detail', {
    url: '/community-detail',
    templateUrl: 'templates/detailTemplate.html',
    controller: 'communitydetailCtrl'
  })

  .state('travel-line', {
    url: '/travel-line',
    templateUrl: 'templates/listTemplate.html',
    controller: 'travellineCtrl'
  })

  .state('travel-line-detail', {
    url: '/travel-line-detail',
    templateUrl: 'templates/detailTemplate.html',
    controller: 'travelLineDetailCtrl'
  })

$urlRouterProvider.otherwise('/launchPage')

  

});