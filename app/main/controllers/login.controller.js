'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCLogin', BCLogin);

  function BCLogin ($log) {
    
    var logger = $log;
    var ctrl = this;

    function login () {
      logger.log('starting login...');
    }
  }
})();
