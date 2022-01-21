/*class TransportSpaceship {
    constructor(name) {
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity) {
        if(newVelocity > 120) {
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}


let spaceship = new TransportSpaceship("Transportador")

spaceship.velocity = 130

console.log(spaceship) */

class ResourceProcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad / 4
    }
}

let resourceProcessor = new ResourceProcessStation("Gaia", 500)

console.log(resourceProcessor.weeklyProcessedLoad)

resourceProcessor.monthlyProcessedLoad = 600

console.dir(resourceProcessor)

console.log(resourceProcessor.weeklyProcessedLoad)
