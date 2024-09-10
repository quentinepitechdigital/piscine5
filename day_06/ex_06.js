function searchCars(agents, key, value) {
    if (typeof agents !== "object") {
        console.warn("The agents is not an object.")
        return null
    }

    const cars = Array();
   
    agents.forEach(agent => {
        if (agent.isMatching(key, value)) {
            cars.push(agent.car)
        }
    });

    return cars
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

        logInfo(log = true) {
            let str = `Car information: ${this.color}, ${this.model}, ${this.brand}`
            if (log) console.log(str)
            return str
        },
    },

    logInfo() {
        console.log("Agent information:", this.firstName + " " + this.lastName, this.code, this.age)
        console.log(`${this.firstName} ${this.lastName}'s`, this.car.logInfo(false))
    },

    isMatching(key, value) {
        return this.car[key] === value;
    }
}

// Je viens de découvrir que je peux demander à Copilot de générer des tests pour moi. C'est génial!

// Test case 1: Search for cars with brand "Aston Martin"
const agents1 = [agent];
const key1 = "brand";
const value1 = "Aston Martin";
const result1 = searchCars(agents1, key1, value1);
console.log(result1); // Expected output: [{ brand: "Aston Martin", model: "DB5", color: "silver" }]

// Test case 2: Search for cars with color "red"
const agents2 = [agent];
const key2 = "color";
const value2 = "red";
const result2 = searchCars(agents2, key2, value2);
console.log(result2); // Expected output: []

// Test case 3: Search for cars with model "DB5"
const agents3 = [agent];
const key3 = "model";
const value3 = "DB5";
const result3 = searchCars(agents3, key3, value3);
console.log(result3); // Expected output: [{ brand: "Aston Martin", model: "DB5", color: "silver" }]