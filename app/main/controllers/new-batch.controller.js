'use strict';

(function () {

  angular
    .module('batchControl')
    .controller('BCNewBatch', BCNewBatch);

  function BCNewBatch ($log, sessionService, bCLocalStorage, dateFilter) {

    var logger = $log;
    var ctrl = this;
    ctrl.init = init;
    ctrl.storeBatchData = storeBatchData;
    ctrl.date = dateFilter(new Date(), 'yyyy-MM-dd');

    ctrl.showForm = true;
    ctrl.session = sessionService;
    ctrl.ls = bCLocalStorage;

    ctrl.init();

    function init () {
      if (ctrl.ls.isBatchInLS()) {
        ctrl.batch = ctrl.session.getCurrentBatch();
        logger.log('batch init', ctrl.batch);
        ctrl.showForm = false;
      } else {
        logger.log('New batch', ctrl.session.getUser());
      }
    }

    function storeBatchData () {
      ctrl.batch.name = ctrl.batchName;
      ctrl.batch.style = ctrl.batchStyle;
      ctrl.batch.alcoholVolume = ctrl.alcVol;
      ctrl.batch.ibu = ctrl.ibu;
      ctrl.session.setCurrentBatch(ctrl.batch)
        .then(
          function (success) {
            logger.log(success);
            ctrl.showForm = false;
          }, function (error) {
            logger.log(error);
          }
        );
    }

  }
})();
