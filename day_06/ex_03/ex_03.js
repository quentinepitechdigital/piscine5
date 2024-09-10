function addCarToAgent(agent, brand = null, model = null, color = null, power = null) {
    if (typeof agent !== "object") {
        console.warn("The agent is not an object.")
        return null
    }
    if (typeof agent.car === "object") {
        console.warn("The agent already has a car.")
        return null
    }
    if (brand === null || model === null || color === null || power === null) {
        console.warn("Missing car information.")
        return null
    }


    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    }
    return agent
}

// let agent = {
//     age: 42,
//     code: "008",
//     firstName: "James",
//     lastName: "Bond"
// }

// agent = addCarToAgent(agent, "Aston Martin", "DB5", "silver", "282 hp")

// window.onload = () => {
//     shareThatBeauty(agent)
// }