'use strict';

(function () {

  angular
    .module('batchControl')
    .controller('BCNewBatch', BCNewBatch);

  function BCNewBatch ($log, sessionService) {

    var logger = $log;
    var ctrl = this;
    ctrl.init = init;
    ctrl.session = sessionService;
    ctrl.batch = {
      'name': '',
      'id': '',
      'style': '',
      'alcoholVolume': '',
      'ibu': '',
      'mash': {},
      'lautering': {},
      'boil': {},
      'cooling': {},
      'inoculation': {}
    };

    init();

    function init () {
      logger.log('New batch', ctrl.session.getUser());
    }

  }
})();
