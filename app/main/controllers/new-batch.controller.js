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
    ctrl.batch = {};

    ctrl.init();

    function init () {
      ctrl.ls.isBatchInLS()
        .then( function (success) {
          ctrl.batch = ctrl.session.getCurrentBatch();
          logger.log('batch init', success);
          ctrl.showForm = false;
        }, function (error) {
          logger.log('New batch', error);
        });
    }

    function storeBatchData () {
      ctrl.batch.name = ctrl.batchName;
      ctrl.batch.style = ctrl.batchStyle;
      ctrl.batch.alcoholVolume = ctrl.alcVol;
      ctrl.batch.ibu = ctrl.ibu;
      ctrl.ls.setCurrentBatch(ctrl.batch)
        .then( function () {
          logger.log('stored in LS');
        }, function () {
          logger.log('not stored in LS');
        });
      ctrl.session.setCurrentBatch(ctrl.batch);
      ctrl.showForm = false;
    }

  }
})();
