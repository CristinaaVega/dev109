// Hotel Constructor Function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

// Create hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10); // New hotel added

// Update existing hotel details in HTML
document.getElementById('hotel1').textContent = quayHotel.name + ' rooms: ' + quayHotel.checkAvailability();
document.getElementById('hotel2').textContent = parkHotel.name + ' rooms: ' + parkHotel.checkAvailability();

// Create and insert the third hotel dynamically
var elHotel3 = document.createElement('div'); // Create new div for Sunset Hotel
elHotel3.textContent = sunsetHotel.name + ' rooms: ' + sunsetHotel.checkAvailability();
elHotel3.id = 'hotel3'; // Assign an ID
document.getElementById('info').appendChild(elHotel3); // Append to the info section

