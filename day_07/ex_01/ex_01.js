const square = document.getElementById("square")

function reduceOpacity() {
    square.style.opacity = square.style.opacity / 2;
}

function resetOpacity() {
    square.style.opacity = 1;
}

square.addEventListener("mouseenter", reduceOpacity);
square.addEventListener("mouseout", resetOpacity);