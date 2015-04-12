'use strict';

angular.module('routemapApp').factory('Ryanair', function ($http) {
    var routes = null;
    var airports = null;

    var airports_promise = $http.get('/api/airports').success(function (data) {
      airports = data;
    });
    var routes_promise = $http.get('/api/routes').success(function (data) {
      routes = data;
    });
//return two promises one for airport on for routes
    return {
      airports_promise:airports_promise,
      routes_promise:routes_promise,
      setAirports: function (data) {
          airports = data;
      },
      getAirports: function () {
          return airports;
      },
      getAirportByIATACode: function (airport_iataCode) {
          for(var j in airports){
              var airport=airports[j];
              if (airport.iataCode==airport_iataCode) {
                 return airport;
              };
            }
      },
      getAirportRoutes:function(){
       return routes;
      },
      getAirportRoutesByAirportIATACode:function(airport_iataCode){
       var route_airports_array=[];
       for(var index in routes){
        var route=routes[index];
        if(index==airport_iataCode){
          for (var i in route){
            var iataCode=route[i];
            for(var j in airports){
              var airport=airports[j];
              if (airport.iataCode==iataCode) {
                 route_airports_array.push(airport);
              };
            }
          }
          return route_airports_array;
        }
       } 
       
      }
    };
  }
);