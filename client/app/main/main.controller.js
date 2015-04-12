'use strict';

angular.module('routemapApp')
  .controller('MainCtrl', function ($scope, $http, Ryanair) {
    
    $scope.airports = Ryanair.getAirports();
    $scope.selectedAirport = '';
    


  });
