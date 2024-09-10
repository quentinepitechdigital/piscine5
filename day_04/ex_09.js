function addHousing(housingList, newHouse, quantity) {
    housingList.get(newHouse) ? housingList.set(newHouse, housingList.get(newHouse) + quantity) : housingList.set(newHouse, quantity);
}