const createGrid = (gridSize) => {
    const container = document.getElementById("container");
    for (let i = 0 ; i < gridSize ; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.width = "480px";
        row.style.display = "flex";
        
        for (let j = 0 ; j < gridSize ; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.width = (480/gridSize) + "px";
            square.style.height = square.style.width;
            square.style.border = "1px solid #222";
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

const colorSquares = (color) => {
    let squares = document.getElementsByClassName("square");
    for (let square of squares) {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = color;
        });
    }
}

const changeColor = () => {
    let colorPicker = document.getElementById("colorPicker");
    colorPicker.addEventListener("change", () => {
        colorSquares(colorPicker.value);
    });  
}

const resizeButton = document.getElementById("resizeButton");
resizeButton.addEventListener("click", () => {
    const container = document.getElementById("container");
    let gridSize = prompt("Choose grid size (between 1 and 32): ");
    if (gridSize === null || gridSize == "")
        return;
    while (isNaN(gridSize) || parseInt(gridSize) < 1 || parseInt(gridSize) > 32) {
        gridSize = prompt("Invalid value ! Please choose a number between 1 and 50: ");
    }
        container.innerHTML = "";
        createGrid(parseInt(gridSize));
        colorSquares(document.getElementById("colorPicker").value);
});

const randomColorButton = document.getElementById("randomColorButton");
randomColorButton.addEventListener("click", () => {
    let options = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0 ; i < 6 ; i++) {
        color += options[Math.floor(Math.random() * options.length)];
    }
    document.getElementById("colorPicker").value = color;
    colorSquares(color);
});

const yourColorButton = document.getElementById("yourColorButton");
yourColorButton.addEventListener("click", () => {
    let colorPicker = document.getElementById("colorPicker");
    colorPicker.click();
    changeColor();
});

const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
    let squares = document.getElementsByClassName("square");
    for (let square of squares) {
        square.style.backgroundColor = "#fff";
    }
});

createGrid(16);
colorSquares(document.getElementById("colorPicker").value);