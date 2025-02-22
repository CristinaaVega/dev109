// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

// Create three hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10);  // New hotel added

// Update the HTML for the first two hotels
document.getElementById('hotel1').textContent = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
document.getElementById('hotel2').textContent = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();

// Update the third hotel dynamically
var elHotel3 = document.createElement('div');  // Create new div for Sunset Hotel
elHotel3.textContent = sunsetHotel.name + ' rooms: ' + sunsetHotel.checkAvailability();
elHotel3.id = 'hotel3'; // Assign an ID

// Append the third hotel to the existing info div
document.getElementById('info').appendChild(elHotel3);
