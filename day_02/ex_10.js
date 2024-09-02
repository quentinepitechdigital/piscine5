let numberOfHamSandwiches = 0;
let numberOfTunaSandwiches = 0;
let numberOfVegSandwiches = 0;

while (breadCount >= 2 && (hamCount >= 1 || (tunaCount >= 1 && saladCount >= 2) || (saladCount >= 1 && tomatoCount >= 2))) {
    if (breadCount >= 2 && hamCount >= 1) {
        numberOfHamSandwiches += 1;
        breadCount -= 2;
        hamCount -= 1;
    } else if (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) {
        numberOfTunaSandwiches += 1;
        breadCount -= 2;
        tunaCount -= 1;
        saladCount -= 2;
    } else if (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) {
        numberOfVegSandwiches += 1;
        breadCount -= 2;
        saladCount -= 1;
        tomatoCount -= 2;
    }
}

displayThisText("Number of ham sandwich(es) : " + numberOfHamSandwiches);
displayThisText("Number of tuna sandwich(es) : " + numberOfTunaSandwiches);
displayThisText("Number of vegetarian sandwich(es) : " + numberOfVegSandwiches);

displayIngredients();