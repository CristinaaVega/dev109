// Prompt user for a number (0-10)
let number = prompt("Enter a number between 0 and 10:");

// Validate input and set default if invalid
number = parseInt(number);
if (isNaN(number) || number < 0 || number > 10) {
    number = 0;
}

// Initialize message with heading
let output = "<h2>Multiplication Table</h2>";
for (let i = 1; i <= 12; i++) {
    output += `${i} x ${number} = ${i * number} <br>`;
}

// Display results inside the blackboard
document.getElementById("output").innerHTML = output;

// Adjust blackboard height dynamically to fit content
let blackboard = document.getElementById("blackboard");
let outputHeight = document.getElementById("output").scrollHeight;
blackboard.style.height = `${outputHeight + 50}px`; // Adds extra padding
