'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCLogin', BCLogin);

  function BCLogin ($log, $state) {
    var logger = $log;
    var ctrl = this;

    var users = [{'name': '1', 'password': '1'}];
    ctrl.login = login;

    function login () {
      logger.log('starting login...');
      if ((ctrl.user.name === users[0].name) && (ctrl.user.password === users[0].password)) {
        logger.log('user found');
        $state.go('home');
      }
    }
  }
})();
