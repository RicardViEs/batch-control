'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCHome', BCHome);
  function BCHome ($log, sessionService) {

    var logger = $log;
    var ctrl = this;
    ctrl.init = init;
    ctrl.drawGraphic = drawGraphic;
    ctrl.session = sessionService;
    ctrl.user = ctrl.session.getUser();
    window.session = sessionService;

    init();

    function init () {
      logger.log('Welcome home ', ctrl.user);
      ctrl.drawGraphic();
    }

    function drawGraphic () {
      ctrl.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

      ctrl.labels = ['0', '10', '20', '30', '40', '50', '60'];
      ctrl.data = [
        [68, 68, 60, 69, 66, 65, 60],
        [65, 64, 64, 64, 64, 64, 65]

      ];
      ctrl.datasetOverride = [
        {
          label: 'Bar chart',
          borderWidth: 1,
          type: 'bar'
        },
        {
          label: 'Line chart',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          type: 'line'
        }
      ];
    }
  }
})();
