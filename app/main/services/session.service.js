'use strict';

(function () {

  angular
    .module('batchControl')
    .service('sessionService', sessionService);

  function sessionService ($log) {
    var logger = $log;

    var user = {'name': ''};
    var currentBatch = {
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

    this.getUser = getUser;
    this.setUser = setUser;
    this.setCurrentBatch = setCurrentBatch;
    this.getCurrentBatch = getCurrentBatch;

    function setUser (data) {
      user.name = data;
      logger.log('user stored in session.');
    }

    function getUser () {
      logger.log('getting user ', user.name);
      return user.name;
    }

    function setCurrentBatch (data) {
      currentBatch = data;
      logger.log('batch stored in session.');
    }

    function getCurrentBatch () {
      return currentBatch;
    }

  }

})();
