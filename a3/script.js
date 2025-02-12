function generateRhombus() {
    let height = parseInt(document.getElementById("rHeight").value);
    let colorEven = document.getElementById("colorEven").value;
    let colorOdd = document.getElementById("colorOdd").value;
    let symbol = document.getElementById("symbol").value;

    let rhombus = "";

    // Generate the top half of the rhombus
    for (let i = 0; i < height; i++) {
        let spaces = "&nbsp;".repeat(height - i); // Spaces for centering
        rhombus += "<p>" + spaces;

        for (let j = 0; j <= 2 * i; j++) { // Ensuring correct number of symbols
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span>`;
        }

        rhombus += "</p>";
    }

    // Generate the bottom half of the rhombus
    for (let i = height - 2; i >= 0; i--) {
        let spaces = "&nbsp;".repeat(height - i); // Spaces for centering
        rhombus += "<p>" + spaces;

        for (let j = 0; j <= 2 * i; j++) { // Ensuring correct number of symbols
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span>`;
        }

        rhombus += "</p>";
    }

    // Display the full rhombus
    document.getElementById("rhombusContainer").innerHTML = rhombus;
}


