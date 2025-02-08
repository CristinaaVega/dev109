// Prompt user for a number (0-10)
let number = prompt("Enter a number between 0 and 10:");

// Convert input to an integer and validate
number = parseInt(number);
if (isNaN(number) || number < 0 || number > 10) {
    number = 0; // Default to 0 if input is invalid
}

// Generate multiplication table
let output = "";
for (let i = 1; i <= 10; i++) {
    output += `${i} x ${number} = ${i * number} <br>`;
}

// Display results inside the blackboard
document.getElementById("output").innerHTML = output;

