'use strict';

(function () {
  angular
    .module('batchControl')
    .filter('msToMinSec', [function () {
      return function (millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      };
    }]);

})();
