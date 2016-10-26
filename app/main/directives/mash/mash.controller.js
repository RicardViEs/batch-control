'use strict';

(function () {
  angular
    .module('batchControl')
    .controller('BCMash', BCMash);
  function BCMash ($log, $timeout, $interval, $scope) {

    var logger = $log;
    var msh = this;
    var mashTimeout = null;
    var intvl = null;
    msh.init = init;
    msh.processNumberOfSteps = processNumberOfSteps;
    msh.getNumber = getNumber;
    msh.createMashWatch = createMashWatch;
    msh.createCountDown = createCountDown;

    msh.showStepsForm = true;
    msh.showMashWatch = false;
    msh.numberOfSteps = 1;
    msh.steps = [{'duration': '', 'temperature': ''}];
    msh.wrongStepNum = false;
    msh.timer = 0;
    msh.timeLeft = null;
    msh.stepState = 'start';

    $scope.$watch('msh.timeLeft', function (value, newValue) {
      if (newValue === 0) {
        $interval.cancel(intvl);
        msh.timeLeft = null;
      }
    });

    $scope.$on('$destroy', function () {
      $timeout.cancel( mashTimeout );
      $interval.cancel(intvl);
    });

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

    function getNumber (num) {
      return new Array(num);
    }

    function createMashWatch () {
      logger.log('creating mash watch with : ', msh.steps);
      msh.showMashWatch = true;
    }

    function createCountDown (startStop, index) {
      if (startStop === 'start') {
        logger.log('start step');
        intvl = $interval(function () {
          mashTimeout = $timeout(function () {
            msh.timeLeft = minToMs(msh.steps[index].duration) - msh.timer;
          });
          msh.timer = msh.timer + 1000;
        }, 1000);
        msh.stepState = 'stop';
      } else if (startStop === 'stop') {
        logger.log('stop step');
        $interval.cancel(intvl);
        $timeout.cancel(mashTimeout);
        msh.timeLeft = null;
        msh.timer = 0;
        msh.stepState = 'start';
      }
    }

    function minToMs (min) {
      return min * 60000;
    }
  }
})();
