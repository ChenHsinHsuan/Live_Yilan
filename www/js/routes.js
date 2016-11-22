angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('tabsController.subject', {
    url: '/tab1',
    views: {
      'tab1': {
        templateUrl: 'templates/subject.html',
        controller: 'subjectCtrl'
      }
    }
  })

  .state('tabsController.info', {
    url: '/tab2',
    views: {
      'tab2': {
        templateUrl: 'templates/info.html',
        controller: 'infoCtrl'
      }
    }
  })

  .state('tabsController.feature', {
    url: '/tab3',
    views: {
      'tab3': {
        templateUrl: 'templates/feature.html',
        controller: 'featureCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/Ctab',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('launch', {
    url: '/launch',
    templateUrl: 'templates/launch.html',
    controller: 'launchCtrl'
  })

  .state('tabsController.story', {
    url: '/tab4',
    views: {
      'tab4': {
        templateUrl: 'templates/story.html',
        controller: 'storyCtrl'
      }
    }
  })

  .state('tabsController.scene', {
    url: '/tab5',
    views: {
      'tab5': {
        templateUrl: 'templates/scene.html',
        controller: 'sceneCtrl'
      }
    }
  })

  .state('feedback', {
    url: '/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'feedbackCtrl'
  })

  .state('scene_detail', {
    url: '/subject_detail',
    templateUrl: 'templates/scene_detail.html',
    controller: 'scene_detailCtrl'
  })

$urlRouterProvider.otherwise('/launch')

  

});