let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
}

// Desestruturação de objeto
let {name: spaceshipName, crewQuantity: crewQuantity} = spaceship

//let spaceshipName = spaceship.name
//let crewQuantity = spaceship.crewQuantity

console.log(spaceshipName, crewQuantity)

//Desestruturação de um Array

let spaceships = ["Colossus", "Artemis", "Fênix"]

let [colossus, artemis, fenix, puller] = spaceships


//let colossus = spaceships[0]
//let artemis = spaceships[1]

console.log(colossus, artemis, fenix, puller)

//Desestruturação em Funções

function printSpaceships([colossus, artemis, fenix, puller]){
    console.log(colossus, artemis, fenix, puller)
}

printSpaceships(spaceships)
