// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

// Create three hotel objects (added Sunset Hotel)
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10); // New hotel

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
document.getElementById('hotel1').textContent = details1;

var details2 = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();
document.getElementById('hotel2').textContent = details2;

var details3 = sunsetHotel.name + ' rooms: ' + sunsetHotel.checkAvailability();
document.getElementById('hotel3').textContent = details3; // Updated to display Sunset hotel

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21, 24, and 27, but note the security issues on p228-231
*/
