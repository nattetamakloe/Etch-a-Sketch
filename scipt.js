const container = document.querySelector("#container");
const newBtn = document.querySelector("#newBtn");
newBtn.addEventListener('click', () => {
    let newSquare = prompt('How many squares per side?');
    
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    setSquare(newSquare);
    
})
function setSquare(number) {
    for (let index = 0; index < Math.pow(number, 2); index++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        square.addEventListener('mouseenter', () => {
            square.style.background = "black";
        })

        container.appendChild(square);

    }
}

setSquare(16)

