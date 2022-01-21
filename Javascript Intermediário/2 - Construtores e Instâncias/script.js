class SpacialStation {
    constructor(name, platformsQuantity) {
        this.name = name
        this.platformsQuantity = platformsQuantity
    }

}

let observatory = new SpacialStation("Observatório", 40)

console.log(observatory)



class Spaceship {
    constructor(name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

let darvin = new Spaceship("Darvin")

let helmet = new Spaceship("Helmet", "Batalha")

console.log(darvin)
console.log(helmet)
