let spaceships = ["Colossus", "Artemis", "Fenix"]

//console.log(spaceships)

//Operador spread

console.log(...spaceships) //considera cada índice do array como entidades distintas

let newSpaceships = [...spaceships, "puller"] // Considera elemento por elemento

console.log(newSpaceships)

function speedUp(velocity, acceleration){
    return velocity + acceleration
} 

let spaceshipAcceleration = [60, 10]
let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)
