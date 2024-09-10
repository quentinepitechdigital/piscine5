function houseEnergyScore(housingList) {
    housingList.forEach(housing => {
        console.log(housing)
        if (housing[1] >= 450) {
            housing.push("G")
            return
        }
        if (housing[1] >= 330) {
            housing.push("F")
            return
        }
        if (housing[1] >= 230) {
            housing.push("E")
            return
        }
        if (housing[1] >= 150) {
            housing.push("D")
            return
        }
        if (housing[1] >= 90) {
            housing.push("C")
            return
        }
        if (housing[1] >= 51) {
            housing.push("B")
            return
        }
        housing.push("A")
    })
    return housingList.sort((a, b) => a[1] - b[1])
}