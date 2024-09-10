function updateLicensePlates(agent, plate) {
    if (typeof agent !== "object") {
        console.warn("The agent is not an object.")
        return null
    }

    if (typeof plate !== "object") {
        console.warn("The plate is not an array.")
        return null
    }

    if (typeof agent.car !== "object") {
        console.warn("The agent doesn't have a car.")
        return null
    }

    if (typeof agent.car.licensePlates !== "array") {
        agent.car.licensePlates = plate
    } else {
        agent.car.licensePlates.push(...plate)
    }

    return agent
}

function showLicensePlates(agent) {
    if (typeof agent !== "object") {
        console.warn("The agent is not an object.")
        return null
    }

    if (typeof agent.car !== "object") {
        console.warn("The agent doesn't have a car.")
        return null
    }

    if (typeof agent.car.licensePlates !== "object") {
        console.warn("The agent doesn't have license plates.")
        return null
    }

    const container = document.querySelector(".plates-container")

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement("li")
        li.textContent = plate
        container.appendChild(li)
    })


}


let agent = {
    age: 42,
    code: "008",
    firstName: "James",
    lastName: "Bond",
    car: {
        brand: "Aston Martin",
        model: "DB5",
        color: "silver",
        power: "282 hp"
    }
}

agent = updateLicensePlates(agent, ["LU 6789", "4711-EA-62", "BMT 216A"])
showLicensePlates(agent)