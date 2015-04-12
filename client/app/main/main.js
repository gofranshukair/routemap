'use strict';

angular.module('routemapApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve:{
	      'RyanairAirportsData':function(Ryanair){
	        // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
	        return Ryanair.airports_promise;
	      },
	      'RyanairRoutesData':function(Ryanair){
	        // MyServiceData will also be injectable in your controller, if you don't want this you could create a new promise with the $q service
	        return Ryanair.routes_promise;
	      }
	   }
      });
  });