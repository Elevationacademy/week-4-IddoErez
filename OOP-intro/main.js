// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }


// const dog = new Animal("Barkley", 2)
// console.log(dog)
// console.log(dog.name)

class Human {
    constructor(name, age, isFriendly) {
        this.name = name
        this.age = age
        this.isFriendly = isFriendly
    }
}

const david = new Human("David", 39, false)
console.log(`${david.name}  is  ${david.age} years old and is ${david.isFriendly ? "friendly" : "not friendly"}`)

const Ido = new Human("Ido", 37, true)
console.log(`${Ido.name} is ${Ido.age} years old and is ${Ido.isFriendly ? "friendly" : "not friendly"}`)

//--------------------------------------

`class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }
   

    giveBirth(name) {
        this.children.push(name)
    }
}

const cat = new Animal("Puss", 4)
console.log(cat)
cat.giveBirth("Dolly")
console.log(cat.children)`

//-------------------------------------------

// class Vehicle {
//     constructor(x, y, speed) {
//         this.x = x
//         this.y = y
//         this.speed = speed
//         Vehicle.carsSold++;

//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney() {
//         console.log(`We've sold ${Vehicle.carsSold} vehicles. Our profit is ${Vehicle.carsSold*30000} dollars`);
//     }
// }

// Vehicle.carsSold = 0;
// const mercedes = new Vehicle("140k", "75k", "180kph")
// const ford = new Vehicle("30k", "55k", "165kph")
// Vehicle.calculateMoney()

class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel
    }
   
    get fuel() {
        return this._fuel
    }

    set fuel(amount) {
        if (amount > 150) { return console.log("Too much") }
        if (amount < 0) { return console.log("Not reasonable") }
        this._fuel = amount
    }
    
    
    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }
    get speed() {
        return this._speed
    }
}

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = 2 
c.fuel = 150
console.log(c.fuel)  // prints undefined

//---------------------------------------------------

class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}

class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
    }
}

const cat = new Animal("Puss", 4)
const zoo = new Zoo()

zoo.addAnimal(cat) // prints "Added Puss to the zoo"
zoo.showAnimals() // prints "Puss"
