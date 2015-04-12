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
          return airports;//.getSomeData();
      },
      getAirportRoutes:function(){
       return routes;
      }
    };
  }
);