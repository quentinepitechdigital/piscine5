window.addEventListener('DOMContentLoaded', function () {
    let robot = document.querySelector(".container")
    let screen = document.querySelector("#screen-text")
    let input = document.querySelector("#robot-input")
    let eyeR = document.querySelector(".eye-right-iris")
    let eyeL = document.querySelector(".eye-left-iris")

    robot.addEventListener('click', event => {
        document.querySelector("#speech-bubble").innerText = "Ooch, that hurts!"
        setTimeout(function () {
            document.querySelector("#speech-bubble").innerText = "Hello !"
        }, 2000);
    })
    robot.addEventListener('mousemove', event => {
        screen.innerText = `X:${event.clientX} Y:${event.clientY}`
    })
    robot.addEventListener('mouseleave', event => {
        screen.innerText = `Bip bip bip !`
    })
    input.addEventListener('keypress', event => {
        if (event.key === "Enter") {
            input.value = ""
            screen.innerText = "Don't worry, I'll take care of it!"
            setTimeout(function () {
                screen.innerText = "Bip bip bip !"
            }, 2000);
        }
    })

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let clicks = 0

    function incrementClicks() {
        clicks++
        if (clicks > 9) {
            clicks = 0
            let color = getRandomColor()
            eyeR.style.fill = color
            eyeL.style.fill = color
        }
    }

    eyeR.addEventListener('click', event => {
        incrementClicks()
    })
    eyeL.addEventListener('click', event => {
        incrementClicks()
    })

})