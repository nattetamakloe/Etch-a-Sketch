const container = document.querySelector("#container");
function setSquare(number) {
    for (let index = 0; index < number; index++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.addEventListener('mouseenter', () => {
            square.style.background = "black";
        })
        square.addEventListener('mouseleave', () => {
            square.style.background = "white";
        })
        container.appendChild(square);

    }
}

setSquare(256)

