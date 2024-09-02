let notdefined
let bool = true
let number = 1
let bigint = BigInt(1)
let symbol = Symbol("foo");
let obj = new Object()
let func = () => {}

displayThisText(typeof notdefined);
displayThisText(typeof bool);
displayThisText(typeof number);
displayThisText(typeof bigint);
displayThisText(typeof symbol);
displayThisText(typeof obj);
displayThisText(typeof func);