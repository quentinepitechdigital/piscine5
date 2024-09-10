window.onload = () => {

    const description = document.getElementById("description");
    const children = description.querySelectorAll("p")

    document.getElementById("productName").textContent = "Samsung 22"
    document.getElementById("price").textContent = "890 €"
    document.getElementById("tag").remove()
    document.querySelector("img").src = "Samsung22.png"

    let counter = 0
    const counterEl = document.createElement("label")
    counterEl.textContent = `In cart: ${counter}`

    children[0].textContent = "Never miss that perfect shot again."
    children[1].textContent = "Designed to revolutionise video and photography, with beyond cinematic 16K resolution."
    children[2].textContent = "Get yours now !"

    document.getElementById("addToCart").addEventListener("click", () => {
        counter++
        counterEl.textContent = `In cart: ${counter}`
    })

    document.querySelector(".content").appendChild(counterEl)

}