function addCar(agentString, car) {
    const obj = JSON.parse(agentString)
    obj["car"] = car;
    return obj;
}

// const agent = {
//     age: 42,
//     code: "008",
//     firstName: "James",
//     lastName: "Bond"
// }

// window.onload = () => {
//     const obj = addCar(JSON.stringify(agent), "Aston Martin");
//     const paragraph = document.querySelector("#container").querySelector("p")
//     paragraph.textContent = `My name is ${obj.lastName}, ${obj.firstName} ${obj.lastName}! I'm the agent ${obj.code} and I'm ${obj.age} years old. I drive an ${obj.car}.`
// }
