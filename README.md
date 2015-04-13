# Routemap

Welcome to Routes Map of RyanAir, you can click at any of our European Airports to see the available routes, Alternatively you can search using airport name or its IATA code.

## Requirements & Running 
To run this application you need to have Node.js installed.
you can download Node from [here](https://nodejs.org/download/).
And also u may need [Request Package](https://www.npmjs.com/package/request)

To run this application, follow these steps:

+ clone the code from git `git clone https://github.com/gofranshukair/routemap.git`
+ navigate to the "dist" folder `cd routmap/dist/` 
+ run `npm install`
+ You might also need to run `npm install request`
+ run `node server/app.js`
+ go your browser and navigate to http://localhost:9000/

## Code Evaluation
To check where excatly my cotributions check the files (comments included):

* under folder client/ , client/app/ and client/components.
* under folder server/app.js and server/routes.js



## Resources
I used the [amCharts](http://www.amcharts.com/) libaray for the map 
and the  [AngularJS Autocomplete Directive](https://github.com/darylrowland/angucomplete) directive for the autocomplete functionality.

## Build & development
You need to have Grunt install globally in order to build the application.
Run `grunt` for building and `grunt serve` for preview.
