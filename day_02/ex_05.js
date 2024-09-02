let firstname = "John"
let lastname = "Doe"
let cardCode = "1111 2222 3333 4444"
let expiryDateMonth =  21
let expiryDateYear = 2042
let computedBankInfo = `${firstname},${lastname},${cardCode},${expiryDateMonth}/${expiryDateYear}`
displayInCard(computedBankInfo)