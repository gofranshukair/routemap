'use strict';

angular.module('routemapApp')
  .controller('MainCtrl', function ($scope, $http, Ryanair) {
    
    $scope.airports = Ryanair.getAirports();
    $scope.selectedAirport = '';
    $scope.mode="ALL_AIRPORTS";
    $scope.modeText="Hide All Airports";
    
    $scope.airportSelected=function(selectedAirport) {
      $scope.selectedAirport = selectedAirport.originalObject;
      if(selectedAirport.originalObject.iataCode){
       $scope.selectedAirportRoutes =Ryanair.getAirportRoutesByAirportIATACode($scope.selectedAirport.iataCode);
	    }
	   }
    $scope.showAll=function(){
        if($scope.mode=="SINGLE_AIRPORT"){
          $scope.mode="ALL_AIRPORTS";
          $scope.modeText="Hide All Airports";
        }
        else{
           $scope.mode="SINGLE_AIRPORT";
           $scope.modeText="Show all Airports";

        }
        

      }

  });
