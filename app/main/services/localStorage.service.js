'use strict';

(function () {
  angular
    .module('batchControl')
    .service('bCLocalStorage', bCLocalStorage);

  function bCLocalStorage ($log, $q) {

    var logger = $log;

    this.isUserInLS = isUserInLS;
    this.isBatchInLS = isBatchInLS;
    this.setCurrentBatch = setCurrentBatch;
    this.getCurrentBatch = getCurrentBatch;
    this.setUser = setUser;
    this.getUser = getUser;

    function isUserInLS () {
      var deferred = $q.defer();
      localforage.getItem('userName', function (error, value) {
        if (error === null && value !== null) {
          logger.log('is user in LS. ', value);
          deferred.resolve(value);
        } else {
          logger.log(error);
          deferred.reject(error);
        }
      });
      return deferred.promise;
    }

    function isBatchInLS () {
      var deferred = $q.defer();
      localforage.getItem('currentBatch', function (error, value) {
        logger.log('is batch in LS. ', value);
        if (error !== null && value !== null && !angular.isDefined(value.name)) {
          logger.log('batch : ', value.name);
          deferred.resolve(value);
        } else {
          logger.log('error : ', error);
          deferred.reject(error);
        }
      });
      return deferred.promise;
    }

    function setCurrentBatch (data) {

      var deferred = $q.defer();

      localforage.setItem('currentBatch', data).then(function () {
      }).then(function () {
        logger.log('batch stored in local storage.');
        deferred.resolve(data);
      }).catch(function (err) {
        logger.log('error while storing batch...', err);
        deferred.reject('error while storing batch in local storage');
      });

      return deferred.promise;

    }

    function setUser (data) {

      var deferred = $q.defer();

      localforage.setItem('userName', data).then(function () {
      }).then(function (value) {
        logger.log('user stored in local storage.');
        deferred.resolve(value);
      }).catch(function (err) {
        logger.log('error while storing user...', err);
        deferred.reject('error while storing user in local storage');
      });

      return deferred.promise;
    }

    function getUser () {
      var deferred = $q.defer();
      localforage.getItem('userName', function (error, value) {
        if (error === null && value !== null) {
          logger.log('is user in LS. ', value);
          deferred.resolve(value);
          return value;
        } else {
          logger.log(error);
          deferred.reject(error);
        }
      });
      return deferred.promise;
    }

    function getCurrentBatch () {
      var deferred = $q.defer();
      localforage.getItem('currentBatch', function (error, value) {
        if (error === null && value !== null) {
          logger.log('is currentBatch in LS. ', value);
          deferred.resolve(value);
        } else {
          logger.log(error);
          deferred.reject(error);
        }
      });
      return deferred.promise;
    }

  }
})();
