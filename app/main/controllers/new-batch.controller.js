'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCNewBatch', BCNewBatch);
  function BCNewBatch ($log) {

    var logger = $log;
    var ctrl = this;
    ctrl.init = init;

    init();

    function init () {
      logger.log('New batch');
    }

  }
})();
