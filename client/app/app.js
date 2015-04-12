'use strict';

angular.module('routemapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angucomplete-alt'
])
.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });