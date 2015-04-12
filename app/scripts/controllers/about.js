'use strict';

/**
 * @ngdoc function
 * @name routemapApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the routemapApp
 */
angular.module('routemapApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
