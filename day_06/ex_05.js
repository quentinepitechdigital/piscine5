let agent = {
    age: 42,
    code: "008",
    firstName: "James",
    lastName: "Bond",
    car: {
        brand: "Aston Martin",
        model: "DB5",
        color: "silver",

        logInfo(log = true) {
            let str = `Car information: ${this.color}, ${this.model}, ${this.brand}`
            if (log) console.log(str)
            return str
        },
    },

    logInfo() {
        console.log("Agent information:", this.firstName + " " + this.lastName, this.code, this.age)
        console.log(`${this.firstName} ${this.lastName}'s`, this.car.logInfo(false))
    }
}

agent.logInfo();
agent.car.logInfo();
// console.log(agent.car)