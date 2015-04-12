'use strict';

angular.module('routemapApp')
  .controller('MainCtrl', function ($scope, $http, Ryanair) {
    
    $scope.airports = Ryanair.getAirports();
    $scope.selectedAirport = '';
    $scope.airportSelected=function(selectedAirport) {
      $scope.selectedAirport = selectedAirport.originalObject;
      if(selectedAirport.originalObject.iataCode){


	  $scope.selectedAirportRoutes =Ryanair.getAirportRoutesByAirportIATACode($scope.selectedAirport.iataCode);
	  
	  }
	}


  });
