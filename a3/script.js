function generateRhombus() {
    let height = parseInt(document.getElementById("rHeight").value);
    let colorEven = document.getElementById("colorEven").value;
    let colorOdd = document.getElementById("colorOdd").value;
    let symbol = document.getElementById("symbol").value;

    // Generate all four parts of the rhombus
    upLeft(height, colorEven, colorOdd, symbol);
    upRight(height, colorEven, colorOdd, symbol);
    downLeft(height, colorEven, colorOdd, symbol);
    downRight(height, colorEven, colorOdd, symbol);
}

// Function for top-left part of rhombus
function upLeft(height, colorEven, colorOdd, symbol) {
    let rhombus = "";
    for (let i = 0; i < height; i++) {
        rhombus += "<p>";
        for (let j = height - i; j > 0; j--) {
            rhombus += "&nbsp;&nbsp;";  // Spaces for alignment
        }
        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span> `;
        }
        rhombus += "</p>";
    }
    document.getElementById("upLeft").innerHTML = rhombus;
}

// Function for top-right part of rhombus
function upRight(height, colorEven, colorOdd, symbol) {
    let rhombus = "";
    for (let i = 0; i < height; i++) {
        rhombus += "<p>";
        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span> `;
        }
        rhombus += "</p>";
    }
    document.getElementById("upRight").innerHTML = rhombus;
}

// Function for bottom-left part of rhombus
function downLeft(height, colorEven, colorOdd, symbol) {
    let rhombus = "";
    for (let i = height; i > 0; i--) {
        rhombus += "<p>";
        for (let j = height - i; j > 0; j--) {
            rhombus += "&nbsp;&nbsp;";  // Spaces for alignment
        }
        for (let j = 0; j < i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span> `;
        }
        rhombus += "</p>";
    }
    document.getElementById("downLeft").innerHTML = rhombus;
}

// Function for bottom-right part of rhombus
function downRight(height, colorEven, colorOdd, symbol) {
    let rhombus = "";
    for (let i = height; i > 0; i--) {
        rhombus += "<p>";
        for (let j = 0; j < i; j++) {
            let color = j % 2 === 0 ? colorOdd : colorEven;
            rhombus += `<span style='color:${color};'>${symbol}</span> `;
        }
        rhombus += "</p>";
    }
    document.getElementById("downRight").innerHTML = rhombus;
}

