'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BDCLogout', BDCLogout);

  function BDCLogout ($log, $state) {

    var logger = $log;
    var lgt = this;

    lgt.logout = logout;

    function logout () {
      logger.log('login out user ');
      localforage.setItem('userName', null).then(function () {
      }).then(function () {
        logger.log('user logged out');
        $state.go('login');
      }).catch(function (err) {
        logger.log('error while logging out user...', err);
      });
    }

  }

})();
