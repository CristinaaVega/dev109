// Prompt the user for a number (0-10)
let number = prompt("Enter a number between 0 and 10:");

// Convert to integer and handle invalid input
number = parseInt(number);
if (isNaN(number) || number < 0 || number > 10) {
    number = 0; // Default to 0 if invalid input
}

// Generate multiplication table
let output = "<p>";
for (let i = 1; i <= 10; i++) {
    output += `${i} x ${number} = ${i * number} <br>`;
}
output += "</p>";

// Display the table in the HTML
document.getElementById("output").innerHTML = output;

