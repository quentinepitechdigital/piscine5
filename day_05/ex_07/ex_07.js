function getColor() {
    const hexValues = "0123456789ABCDEF";
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexValues.length);
        hexCode += hexValues[randomIndex];
    }
    return hexCode;
}

window.onload = () => {
    const body = document.querySelector("body");
    const btn = document.getElementById("addToCart");

    const child = btn.querySelector(".cart-btn");
    console.log(child)
    child.textContent = "CHANGE COLOR";
    btn.addEventListener("click", () => {
        body.style.backgroundColor = getColor();
    });
}