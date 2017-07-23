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

  var api="https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=cee0ec3127304f7183f6cfa83d7e11dd";
  $.getJSON(api, function(data) {
    alert(data.main.temp);
    //console.log(data.weather.main);
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
