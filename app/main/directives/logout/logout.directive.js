'use strict';

(function () {

  angular
    .module('batchControl')
    .directive('bCDLogout', bCDLogout);

  function bCDLogout ($log) {
    var logger = $log;
    logger.info('init logout directive');

    var directive = {
      controller: 'BDCLogout',
      templateUrl: 'main/directives/logout/logout.template.html',
      controllerAs: 'lgt',
      restrict: 'E',
      bindToController: true,
      transclude: true
    };
    return directive;

  }

})();
