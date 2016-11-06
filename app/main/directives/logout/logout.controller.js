'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BDCLogout', BDCLogout);

  function BDCLogout ($log, $state, sessionService, bCLocalStorage) {

    var logger = $log;
    var lgt = this;

    lgt.logout = logout;
    lgt.session = sessionService;
    lgt.ls = bCLocalStorage;

    function logout () {
      logger.log('login out user ');
      lgt.ls.setUser(null)
        .then(
          function (success) {
            logger.log(success);
            lgt.ls.setCurrentBatch(null)
              .then(
                function (success) {
                  logger.log(success);
                  logger.log('user logged out');
                  $state.go('login');
                }, function (error) {
                  logger.log(error);
                }
              );
          }, function (error) {
            logger.log(error);
          }
        );
    }

  }

})();
