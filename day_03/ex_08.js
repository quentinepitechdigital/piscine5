fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];
function getFruit(parameter) {
    if (typeof parameter === "integer") {
        if (parameter == -1) return fruits.slice(-1)[0]
        if (parameter < -1 || parameter >= fruits.length) return null
        return fruits[parameter]
    }
    if (typeof parameter === "string") {
        const i = fruits.indexOf(parameter);
        if (i == -1) return null
        return i
    }
}