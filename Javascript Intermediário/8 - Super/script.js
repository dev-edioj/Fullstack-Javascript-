class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity) {
        this.name = name
        this.maxCrew =  maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }
    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity) {
            alert("VELOCIDADE ULTRAPASSADA!!! \n DIMINUA OU PODERÁ PROVOCAR DANOS A NAVE")
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
        super(name, maxCrew, maxRecommendedVelocity)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration){
        acceleration /= 2
        alert("Incrementando velocidade em " + acceleration + " km/s")
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210) 


/* class TransportSpaceship extends Spaceship {
    speedUp() {
        alert("Naves de transporte só aumentam a velocidade m 1 km/s")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)


transportSpaceship.speedUp()

console.log(transportSpaceship) */

/*

class BattleSpaceship extends Spaceship {
    stop(){
        this.currentVelocity =  0
        alert("Recolhendo armas e parando nave de batalha")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity =  0
        alert("Recolhendo equipamentos de amostras e parando nave de descoberta")
    }
}

let darwin = new DiscoverySpaceship("darwin", 10, 200)

let fenix = new BattleSpaceship("Fenix", 8, 240)

darwin.speedUp(210)

fenix.speedUp(230)

darwin.stop()

fenix.stop()

*/

