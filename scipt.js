const container = document.querySelector("#container");
function setSquare(number) {
    for (let index = 0; index < number; index++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);

    }
}

setSquare(256)

