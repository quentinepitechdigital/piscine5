// Enoncé pas clair du tout, je check nbFruits > stock sauf que si il demande 3 peaches on a pas ca.

let s = "strawberry"
let a = "apple"
let l = "lime"
let p = "peach"
let p2 = "pear"
let stock = [s, s, s, a, a, l, l, p, p2, p2]

function getBasketContent(nbFruits) {

  let fruits = [s, s, p, s]


  if (nbFruits < stock.length) {
    console.log(stock.length + " fruit(s) selected")
    return fruits
  } else {
    console.log("Too many fruit(s) selected")
    return []
  }
}


//To test your function copy and paste the code from the last fiddle, and adapt it to fit the needs of this exercise.
// Write your function here ...

if (typeof getBasketContent === "function") {
  const fruits = getBasketContent(3)
  showMyBasket(fruits)
}
