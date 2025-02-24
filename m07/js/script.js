// Create three hotel objects (including the new one)
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);
var sunsetHotel = new Hotel("Sunset", 86, 10); // New hotel added

// Update the HTML for the first two hotels (kept existing logic)
document.getElementById("hotel1").textContent =
  quayHotel.name + " rooms: " + quayHotel.checkAvailability();
document.getElementById("hotel2").textContent =
  parkHotel.name + " rooms: " + parkHotel.checkAvailability();

// Dynamically create and append the third hotel
var elHotel3 = document.createElement("div"); // Create new div
elHotel3.id = "hotel3"; // Assign ID
elHotel3.textContent =
  sunsetHotel.name + " rooms: " + sunsetHotel.checkAvailability();
document.getElementById("info").appendChild(elHotel3); // Append inside "info" div

