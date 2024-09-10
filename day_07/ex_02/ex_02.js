let rotation = 0

function rotateCircle(step) {
    rotation = step == 0 ? 0 : rotation + step
    document.getElementById("circle").style.transform = `rotate(${rotation}deg)`;
}

window.onload = () => {
    const buttons = document.querySelectorAll('.rotate-button')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            rotateCircle(parseInt(button.value));
        });
    });
}