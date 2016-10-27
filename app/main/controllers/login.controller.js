'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCLogin', BCLogin);

  function BCLogin ($log, $state, sessionService) {
    var logger = $log;
    var ctrl = this;
    ctrl.session = sessionService;

    var users = [{'name': '1', 'password': '1'}];
    ctrl.login = login;

    function login () {
      logger.log('starting login...');
      if ((ctrl.user.name === users[0].name) && (ctrl.user.password === users[0].password)) {
        logger.log('user found');
        localforage.setItem('userName', ctrl.user.name).then(function () {
        }).then(function () {
          ctrl.session.setUser(ctrl.user.name);
          logger.log('user stored in local storage.');
          $state.go('home');
        }).catch(function (err) {
          logger.log('error while storing user...', err);
        });
      }
    }
  }
})();
