'use strict';

angular.module('routemapApp').directive('worldMap', ['$rootScope','$timeout','Ryanair',function ($rootScope,$timeout,Ryanair) {


  return {
    restrict: 'E',
    replace: true,
    scope: {
      selectedAirport:'=',
      selectedAirportRoutes:'='
    },
    templateUrl: 'components/directives/worldmap.html',
    compile: function (tElem) {
      
      // svg path for target icon
      var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
      // svg path for plane icon
      var planeSVG = 'M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z';

      var map = AmCharts.makeChart('worldMapDiv', {
          type: 'map',
         'theme': 'none',
          pathToImages: 'http://www.amcharts.com/lib/3/images/',

            dataProvider: {
                                  map: "worldLow",
                                  areas: []
                                },

            areasSettings: {
              unlistedAreasColor: '#FFCC00'
            },

            imagesSettings: {
              color: '#22356b',
              rollOverColor: '#22356b',
              selectedColor: '#000000'
            },

            linesSettings: {
              color: '#22356b',
              alpha: 0.4
            },

            zoomControl:{    
              "zoomControlEnabled": true,
              buttonColorHover:"#22356b",
              buttonFillColor:"#22356b"  },
            backgroundZoomsToTop: true,
            linesAboveImages: true
          }); 
         return  function (scope) {

            scope.$watch("selectedAirportRoutes", function (value) {
             var selectedAirportRoutes=scope.selectedAirportRoutes;
             var selectedAirport=scope.selectedAirport;
             
             if(selectedAirport){ 
              var all_images=[{
                    id: selectedAirport.name,
                    color: "#000000",
                    svgPath: targetSVG,
                    title: selectedAirport.name,
                    latitude: selectedAirport.latitude,
                    longitude: selectedAirport.longitude,
                    iataCode:selectedAirport.iataCode,
                    scale: 1.5,
                    zoomLevel: 2.74,
                    lines: [],
                    images: [{
                      label: "Routes from/to "+ selectedAirport.name,
                      svgPath: planeSVG,
                      left: 100,
                      top: 45,
                      labelShiftY: 5,
                      color: "#CC0000",
                      labelColor: "#CC0000",
                      labelRollOverColor: "#CC0000",
                      labelFontSize: 20
                    }]
                    }
                  ];
             
              
              for(var index in selectedAirportRoutes){
                var route_item=selectedAirportRoutes[index];
                var line={
                  latitudes: [selectedAirport.latitude, route_item.latitude],
                  longitudes: [selectedAirport.longitude, route_item.longitude]
                }
                all_images[0].lines.push(line);
                var image={
                    id: route_item.name,
                    svgPath: targetSVG,
                    iataCode:route_item.iataCode,
                    title: route_item.name,
                    latitude: route_item.latitude,
                    longitude: route_item.longitude,
                    description:"<h1>hello</h1>",
                  }
                 all_images.push(image); 
              }

              var dataProvider={
                map: "worldLow",
                linkToObject: selectedAirport.name,
                images: all_images
                };
                map.dataProvider=dataProvider;
                map.validateData();
             
             
           
          }

            });
     
             map.addListener("clickMapObject", function (event) {
                if (event.mapObject.id != undefined) {
                   console.log(event.mapObject);
                   var selectedAirportItem=event.mapObject;
                   scope.selectedAirport=Ryanair.getAirportByIATACode(selectedAirportItem.iataCode);
                   scope.selectedAirportRoutes=Ryanair.getAirportRoutesByAirportIATACode(selectedAirportItem.iataCode);
                   scope.$apply();
                }
            });

    }
   }
  };// return 
} // function
]);