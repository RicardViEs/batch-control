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

.run( function ($state, $log, sessionService, bCLocalStorage) {

  var logger = $log;
  var session = sessionService;
  var ls = bCLocalStorage;

  ls.isUserInLS()
    .then( function (value) {
      logger.log('user ' + value + ' already logged');
      session.setUser(value);
      ls.isBatchInLS()
        .then( function (value) {
          session.setCurrentBatch(value);
          $state.go('home');
        }, function (error) {
          logger.log('error : ', error);
          $state.go('home');
        });
    }, function (error) {
      logger.log(error);
      $state.go('login');
    });
  /*if (ls.isUserInLS()) {
    logger.log('user already logged');
    ls.getUser()
      .then(function (success) {
        session.setUser(success);
        if (ls.isBatchInLS()) {
          ls.getCurrentBatch()
            .then( function (success) {
              session.setCurrentBatch(success);
              $state.go('home');
            }, function (error) {
              logger.log(error);
              $state.go('home');
            });
        } else {
          $state.go('home');
        }
      }, function (error) {
        logger.log(error);
      });
  } else {
    logger.log('no user in LS');
    $state.go('login');
  }*/

});
