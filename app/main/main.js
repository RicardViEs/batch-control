'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router'
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
    });
});
