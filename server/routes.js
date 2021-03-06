/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var request = require('request');

module.exports = function(app) {

 
  app.use('/api/things', require('./api/thing'));

  // callling Ryanair api for a list of the airports using request (https://www.npmjs.com/package/request)
  app.get('/api/airports',function(req, res, next) {
      request('https://ryanair-test.herokuapp.com/api/airports', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        
        res.send(body);
      }
   });
  
   });
  // callling Ryanair api for a list of the routes using request (https://www.npmjs.com/package/request)
  app.get('/api/routes',function(req, res, next) {
      request('https://ryanair-test.herokuapp.com/api/routes', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //console.log(body) // Show the HTML for the Google homepage. 
        res.send(body);
      }
   });
   

  });
   
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
