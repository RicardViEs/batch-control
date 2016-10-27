'use strict';

angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'chart.js'
  // TODO: load other modules selected during generation
])

.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('login', {
      url: '/login',
      templateUrl: 'main/templates/login.template.html',
      controller: 'BCLogin',
      controllerAs: 'ctrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'main/templates/home.template.html',
      controller: 'BCHome',
      controllerAs: 'ctrl'
    })
    .state('new-batch', {
      url: '/new-batch',
      templateUrl: 'main/templates/new-batch.template.html',
      controller: 'BCNewBatch',
      controllerAs: 'ctrl'
    });
})

.run( function ($state, $log, sessionService) {

  var user = null;
  var logger = $log;
  var session = sessionService;

  localforage.getItem('userName', function (error, value) {
    user = value;
    logger.log(error);
    if (error === null && user !== null) {
      session.setUser(user);
      logger.log('user ' + value + ' already logged');
      $state.go('home');
    } else {
      $state.go('login');
    }
  });

});
