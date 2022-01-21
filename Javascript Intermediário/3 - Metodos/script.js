class spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration) {
        this.velocity += acceleration
    }
}


let artemis = new spaceship("Artemis")


artemis.speedUp(10)
artemis.speedUp(15)

console.log(artemis)
