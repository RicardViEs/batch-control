'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCLogin', BCLogin);

  function BCLogin ($log, $state, sessionService, bCLocalStorage) {
    var logger = $log;
    var ctrl = this;
    ctrl.session = sessionService;
    ctrl.ls = bCLocalStorage;

    var users = [{'name': 'test', 'password': '1234'}];
    ctrl.login = login;

    function login () {
      logger.log('starting login...');
      if ((ctrl.user.name === users[0].name) && (ctrl.user.password === users[0].password)) {
        logger.log('user found');
        ctrl.ls.setUser(ctrl.user.name)
          .then(
            function (success) {
              logger.log('going home with user : ', success);
              ctrl.session.setUser(ctrl.user.name);
              $state.go('home');
            }, function (error) {
              logger.log(error);
            }
          );
      }
    }
  }
})();
