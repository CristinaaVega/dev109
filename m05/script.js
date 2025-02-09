// Prompt user for a number (0-10)
let number = prompt("Enter a number between 0 and 10:");

// Validate input and set default if invalid
number = parseInt(number);
if (isNaN(number) || number < 0 || number > 10) {
    number = 0;
}

// Generate multiplication table
let output = "";
for (let i = 1; i <= 12; i++) { // 12 rows instead of 10
    output += `${i} x ${number} = ${i * number} <br>`;
}

// Display results inside the blackboard
document.getElementById("output").innerHTML = output;

// Adjust blackboard height dynamically
let blackboard = document.getElementById("blackboard");
blackboard.style.height = document.getElementById("output").scrollHeight + "px";
