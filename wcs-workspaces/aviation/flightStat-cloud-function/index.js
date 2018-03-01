var request = require('request');
var moment = require('moment');

function main(params) {
    var appID = params.flightStatsAppID
    var appKey = params.flightStatsAppKey
    var airline = params.request.flight.airline
    var flightNumber = params.request.flight.flightNumber
    var dateArray = params.request.flight.date.split('-')
    var year = dateArray[0]
    var month = dateArray[1]
    var day = dateArray[2]
   var url = "https://api.flightstats.com/flex/flightstatus/rest/v2/json/flight/status/" + airline + "/" + flightNumber + "/dep/" + year + "/" + month + "/" + day + "?appId=" + appID + "&appKey=" + appKey + "&utc=false"

   return new Promise(function(resolve, reject) {
       request.get(url, function(error, response, body) {
           if (error) {
               reject(error);
           }
           else {
               var data = JSON.parse(body)
               if(data.error) {
                 reject({
                   'error': data.error.errorMessage,
                   'flightStatResponse': data
                 })
               } else {
                 if(data.flightStatuses[0]){
                   flightStatus = {
                       "departureDate": moment(data.flightStatuses[0].departureDate.dateLocal).format("ddd MMM D h:mm:ss A YYYY"),
                       "arrivalDate":data.flightStatuses[0].arrivalDate.dateLocal,
                       "airportResources":data.flightStatuses[0].airportResources,
                      "delay": (data.flightStatuses[0].delays) ? data.flightStatuses[0].delays.arrivalGateDelayMinutes : null,
                       "flightDuration":data.flightStatuses[0].flightDurations.scheduledBlockMinutes,
                       "departureAirport":data.flightStatuses[0].departureAirportFsCode,
                       "arrivalAirport":data.flightStatuses[0].arrivalAirportFsCode
                   }
                   resolve(flightStatus);
                 } else {
                   reject({
                     'error': 'no flight found',
                     'flightStatResponse': data
                   })
                 }
               }
           }
       });
   });
}

exports.main = main;
