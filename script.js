$(document).ready(function() {
  var long;
  var lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      long = position.coords.longitude;
      lat = position.coords.latitude;
      $("#data").html("latitude: " + lat + "<br>longitude: " + long);
    });
  }

  var api="http://api.wunderground.com/api/2ab250a47985fdce/geolookup/q/" + lat + "," + long + ".json";
  $.getJSON(api, function(data) {
    //alert(data.location.lat);
    console.log(api);
  });

});


// if (navigator.geolocation) {
//  navigator.geolocation.getCurrentPosition(function(position) {
//    var lat = position.coords.latitude;
//    var lon = position.coords.longitude;
//    $("#data").html("latitude: " + lat + "<br>longitude: " + lon);
//    //console.log(lat);
//  });
// }
// note

// 2nd note
