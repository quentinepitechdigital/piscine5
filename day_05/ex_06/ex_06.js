window.onload = () => {
    window.addEventListener("resize", () => {
        alert("Size matters")
    })

    const img = document.querySelectorAll("img")[0]

    img.addEventListener("mouseover", () => {
        alert("Pretty isn't it?")
    })
}