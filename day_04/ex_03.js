function fillBus(peopleAtBusStops, busSeats) {
    try {
        if (typeof busSeats !== "number" || busSeats < 1) {
            return -1
        }

        let peopleInBus = 0;
        for (let index = 0; index < peopleAtBusStops.length; index++) {
            peopleInBus += peopleAtBusStops[index]
            if (peopleInBus > busSeats) {
                return index + 1
            }
        }
        return null
    } catch {
        return -1
    }

}