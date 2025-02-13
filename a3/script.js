function generateRhombus() {
    let height = parseInt(document.getElementById("rHeight").value);
    let colorEven = document.getElementById("colorEven").value;
    let colorOdd = document.getElementById("colorOdd").value;
    let symbol = document.getElementById("symbol").value;

    let rhombusHTML = "";

    // Generate top half of rhombus
    for (let i = 0; i < height; i++) {
        let lineHTML = "&nbsp;".repeat(height - i); // Spaces for alignment
        for (let j = 0; j <= i * 2; j++) {
            let color = j % 2 === 0 ? colorEven : colorOdd;
            lineHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += `<div>${lineHTML}</div>`;
    }

    // Generate bottom half of rhombus
    for (let i = height - 2; i >= 0; i--) {
        let lineHTML = "&nbsp;".repeat(height - i); // Spaces for alignment
        for (let j = 0; j <= i * 2; j++) {
            let color = j % 2 === 0 ? colorEven : colorOdd;
            lineHTML += `<span style="color:${color};">${symbol}</span>`;
        }
        rhombusHTML += `<div>${lineHTML}</div>`;
    }

    // Set the rhombus in the container
    document.getElementById("rhombusContainer").innerHTML = rhombusHTML;
}


