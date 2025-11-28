let size = 16;
const container = document.querySelector("#container");
const newBtn = document.querySelector("#newBtn");
newBtn.addEventListener('click', clearGrid);

function setContainerSize() {
    let shortestSide = Math.min(window.innerHeight, window.innerWidth)
    let gridSize = shortestSide * 0.9;
    container.style.width = gridSize + "px";
    container.style.height = gridSize + "px";
}

function createGrid(size) {
    for (let i = 0; i < Math.pow(size, 2); i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.addEventListener('mouseenter', () => {
            square.style.background = "black";
        })

        container.appendChild(square);
    }
}

function setSquareSize(size) {
    const squares = document.querySelectorAll(".square");
    const squareWidthPercent = 100 / size;

    for (const square of squares) {
        square.style.flexBasis = squareWidthPercent + "%";
        square.style.height = "auto";
        square.style.flexGrow = "0";
        square.style.flexShrink = "0";
    }

}

function clearGrid() {
    let size = prompt("How many squares per side? (1–100)");

    if (size === null) return;

    size = size.trim();
    if (size === "") {
        alert("You must enter a number.");
        return;
    }

    const newSize = Number(size);

    if (isNaN(newSize)) {
        alert("That is not a number.");
        return;
    }

    if (newSize < 1 || newSize > 100) {
        alert("Number must be between 1 and 100.");
        return;
    }

    size = newSize;

    container.innerHTML = "";
    setContainerSize();
    createGrid(size);
    setSquareSize(size);
}

setContainerSize();
window.addEventListener("resize", () => {
    setContainerSize();
    setSquareSize(size)
});
createGrid(size)
setSquareSize(size)

