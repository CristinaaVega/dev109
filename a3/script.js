function generateRhombus() {
    let height = parseInt(document.getElementById("rHeight").value);
    let colorEven = document.getElementById("colorEven").value;
    let colorOdd = document.getElementById("colorOdd").value;
    let symbol = document.getElementById("symbol").value;

    let rhombus = "";

    // Generate the top half of the rhombus
    for (let i = 0; i < height; i++) {
        let spaces = "&nbsp;".repeat(height - i - 1); // Spaces for centering
        rhombus += "<p>" + spaces;

        for (let j = 0; j < 2 * i + 1; j++) { // Ensure correct number of symbols per row
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span>`;
        }

        rhombus += "</p>";
    }

    // Generate the bottom half of the rhombus
    for (let i = height - 2; i >= 0; i--) {
        let spaces = "&nbsp;".repeat(height - i - 1); // Spaces for centering
        rhombus += "<p>" + spaces;

        for (let j = 0; j < 2 * i + 1; j++) { // Ensure correct number of symbols per row
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span>`;
        }

        rhombus += "</p>";
    }

    // Display the full rhombus in one container
    document.getElementById("rhombusContainer").innerHTML = rhombus;
}



