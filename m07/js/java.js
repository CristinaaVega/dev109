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

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
document.getElementById('hotel1').textContent = details1;

var details2 = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();
document.getElementById('hotel2').textContent = details2;

// New element for the third hotel
var details3 = sunsetHotel.name + ' rooms: ' + sunsetHotel.checkAvailability();
var elHotel3 = document.createElement('div');  // Create a new div for the third hotel
elHotel3.textContent = details3;
elHotel3.id = 'hotel3';  // Assign an ID for styling if needed

document.getElementById('info').appendChild(elHotel3);  // Append to the info section
