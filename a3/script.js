function generateRhombus() {
    let height = parseInt(document.getElementById("rHeight").value);
    let colorEven = document.getElementById("colorEven").value;
    let colorOdd = document.getElementById("colorOdd").value;
    let symbol = document.getElementById("symbol").value;

    let rhombusHTML = "";

    // Generate top half
    for (let i = 0; i < height; i++) {
        let spaces = " ".repeat(height - i); // Spaces for alignment
        let lineHTML = spaces;

        for (let j = 0; j <= i * 2; j++) {
            let color = j % 2 === 0 ? colorEven : colorOdd;
            lineHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += `<div style="white-space: pre;">${lineHTML}</div>`;
    }

    // Generate bottom half
    for (let i = height - 2; i >= 0; i--) {
        let spaces = " ".repeat(height - i); // Spaces for alignment
        let lineHTML = spaces;

        for (let j = 0; j <= i * 2; j++) {
            let color = j % 2 === 0 ? colorEven : colorOdd;
            lineHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += `<div style="white-space: pre;">${lineHTML}</div>`;
    }

    // Set the rhombus in the container
    document.getElementById("rhombusContainer").innerHTML = rhombusHTML;
}


