const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors()

function generateColors(){
    colorContainerEls.forEach((element) => {
        const newColorCode = randomColor();
        element.style.backgroundColor = "#" + newColorCode;
        element.innerText = "#" + newColorCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color = color + chars[randomNum];
    }
    return color;
}