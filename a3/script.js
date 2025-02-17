function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p style='text-align: right;'>";

        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? pColorEven : pColorOdd;
            rLine += `<span style='color:${color};'>${pSymbol}</span>`;
        }

        rLine += "</p>";
    }
    document.getElementById("upLeft").innerHTML = rLine;
}

function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = 0; i < pHeight; i++) {
        rLine += "<p style='text-align: left;'>";

        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? pColorEven : pColorOdd;
            rLine += `<span style='color:${color};'>${pSymbol}</span>`;
        }

        rLine += "</p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}

function downLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p style='text-align: right;'>";

        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? pColorEven : pColorOdd;
            rLine += `<span style='color:${color};'>${pSymbol}</span>`;
        }

        rLine += "</p>";
    }
    document.getElementById("downLeft").innerHTML = rLine;
}


function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    let rLine = "";
    for (let i = pHeight - 1; i >= 0; i--) {
        rLine += "<p style='text-align: left;'>";

        for (let j = 0; j <= i; j++) {
            let color = j % 2 === 0 ? pColorEven : pColorOdd;
            rLine += `<span style='color:${color};'>${pSymbol}</span>`;
        }

        rLine += "</p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
}


