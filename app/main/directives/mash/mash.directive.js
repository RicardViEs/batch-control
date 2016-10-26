'use strict';

(function () {

  angular
    .module('batchControl')
    .directive('bCDMash', BCDMash);

  /* @ngInject */
  function BCDMash ($log) {
    var logger = $log;
    logger.debug('init BCDMash');
    var directive = {
      controller: 'BCMash',
      bindToController: true,
      controllerAs: 'msh',
      templateUrl: 'main/directives/mash/mash.template.html',
      restrict: 'E',
      transclude: true
    };
    return directive;


  }

})();


