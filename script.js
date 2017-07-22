$(document).ready()


if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
   var lat = position.coords.latitude;
   var lon = position.coords.longitude;
   $("#data").html("latitude: " + lat + "<br>longitude: " + lon);
   //console.log(lat);
 });
}
// note
