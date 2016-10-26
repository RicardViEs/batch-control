'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCMash', BCMash);
  function BCMash ($log) {

    var logger = $log;
    var msh = this;
    msh.init = init;
    msh.processNumberOfSteps = processNumberOfSteps;
    msh.createMashWatch = createMashWatch;

    msh.showStepsForm = true;
    msh.showMashWatch = false;
    msh.numberOfSteps = 1;
    msh.steps = [{'duration': '', 'temperature': ''}];
    msh.wrongStepNum = false;

    init();

    function init () {
      logger.log('Starting mash controller');
    }

    function processNumberOfSteps () {
      if (!angular.isDefined(msh.numberOfSteps) || (msh.numberOfSteps < 1 || msh.numberOfSteps > 4)) {
        logger.log('Number of steps out of range');
        msh.wrongStepNum = true;
      } else {
        logger.log('number of steps : ', msh.numberOfSteps);
        msh.showStepsForm = false;
        msh.wrongStepNum = false;
      }
    }

    function createMashWatch () {
      logger.log('creating mash watch with : ', msh.steps);
      msh.showMashWatch = true;

    }

  }
})();
