class Spaceship {
    static get decelarationRate(){
        return 0.15
    }
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += (acceleration * (1 - Spaceship.decelarationRate))
    }

}

let spaceship = new Spaceship("Apollo")

spaceship.speedUp(100)

console.log(spaceship)

