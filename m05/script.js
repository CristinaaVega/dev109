// Function to prompt user for a valid number
function getUserNumber() {
    let num;
    do {
        num = prompt("Enter a number between 0 and 10:");
        if (num === null || num.trim() === "") num = 0; // Handle cancel or empty input
        num = parseInt(num);
    } while (isNaN(num) || num < 0 || num > 10); // Keep asking until valid input

    return num;
}

// Get valid user input
let number = getUserNumber();

// Generate multiplication table
let output = "<p>";
for (let i = 1; i <= 10; i++) {
    output += `${i} x ${number} = ${i * number} <br>`;
}
output += "</p>";

// Display results inside the blackboard
let outputDiv = document.getElementById("output");
outputDiv.innerHTML = output;

// Adjust blackboard height dynamically for better layout
let blackboard = document.getElementById("blackboard");
blackboard.style.minHeight = "auto";
blackboard.style.height = outputDiv.scrollHeight + "px";
blackboard.style.transition = "height 0.5s ease-in-out"; // Smooth resizing
