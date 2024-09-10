fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getFruitNameFromIndex(index) {
    if (index == -1) return fruits.slice(-1)[0]
    if (index < -1 || index >= fruits.length) return null
    return fruits[index]
}