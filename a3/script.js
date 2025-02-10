function generateRhombus() {
    let height = parseInt(document.getElementById("rHeight").value);
    let colorEven = document.getElementById("colorEven").value;
    let colorOdd = document.getElementById("colorOdd").value;
    let symbol = document.getElementById("symbol").value;

    let rhombusLeft = "";
    let rhombusRight = "";

    for (let i = 0; i < height; i++) {
        let leftSpaces = "&nbsp;".repeat(height - i); // Spaces for left side alignment
        let rightSpaces = "&nbsp;".repeat(i * 2); // Spaces to bring right side closer
        
        rhombusLeft += "<p>" + leftSpaces;
        rhombusRight += "<p>";

        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombusLeft += `<span style='color:${color};'>${symbol}</span> `;
        }
        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombusRight += `<span style='color:${color};'>${symbol}</span> `;
        }

        rhombusLeft += "</p>";
        rhombusRight += "</p>";
    }

    let rhombusBottomLeft = "";
    let rhombusBottomRight = "";

    for (let i = height; i > 0; i--) {
        let leftSpaces = "&nbsp;".repeat(height - i); // Spaces for left side alignment
        let rightSpaces = "&nbsp;".repeat(i * 2); // Spaces to bring right side closer
        
        rhombusBottomLeft += "<p>" + leftSpaces;
        rhombusBottomRight += "<p>";

        for (let j = 0; j < i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombusBottomLeft += `<span style='color:${color};'>${symbol}</span> `;
        }
        for (let j = 0; j < i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombusBottomRight += `<span style='color:${color};'>${symbol}</span> `;
        }

        rhombusBottomLeft += "</p>";
        rhombusBottomRight += "</p>";
    }

    document.getElementById("upLeft").innerHTML = rhombusLeft;
    document.getElementById("upRight").innerHTML = rhombusRight;
    document.getElementById("downLeft").innerHTML = rhombusBottomLeft;
    document.getElementById("downRight").innerHTML = rhombusBottomRight;
}


