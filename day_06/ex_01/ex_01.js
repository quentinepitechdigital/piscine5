function displayAgentInfo(obj) {
    const paragraph = document.querySelector("#container").querySelector("p")
    paragraph.textContent = `My name is ${obj.lastName}, ${obj.firstName} ${obj.lastName}! I'm the agent ${obj.code} and I'm ${obj.age} years old.`
}

// const agent = {
//     age: 42,
//     code: "008",
//     firstName: "James",
//     lastName: "Bond"
// }

// window.onload = () => {
//     displayAgentInfo(agent)
// }
