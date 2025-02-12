function generateRhombus() {
    let height = parseInt(document.getElementById("rHeight").value);
    let colorEven = document.getElementById("colorEven").value;
    let colorOdd = document.getElementById("colorOdd").value;
    let symbol = document.getElementById("symbol").value;

    let rhombusTop = "";
    let rhombusBottom = "";

    // Generate the top half of the rhombus
    for (let i = 0; i < height; i++) {
        let spaces = "&nbsp;".repeat(height - i); // Spaces to align top part
        rhombusTop += "<p>" + spaces;
        for (let j = 0; j <= i * 2; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombusTop += `<span style='color:${color};'>${symbol}</span>`;
        }
        rhombusTop += "</p>";
    }

    // Generate the bottom half of the rhombus
    for (let i = height - 2; i >= 0; i--) {
        let spaces = "&nbsp;".repeat(height - i); // Spaces to align bottom part
        rhombusBottom += "<p>" + spaces;
        for (let j = 0; j <= i * 2; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombusBottom += `<span style='color:${color};'>${symbol}</span>`;
        }
        rhombusBottom += "</p>";
    }

    // Display the full rhombus
    document.getElementById("upLeft").innerHTML = rhombusTop;
    document.getElementById("downLeft").innerHTML = rhombusBottom;
}




