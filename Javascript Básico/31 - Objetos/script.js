/*  
let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "War"
} 



console.log(spaceship)
//acessando propriedades
console.log(spaceship.type)
//ou
console.log(spaceship["name"])

//add propriedades ao object 
spaceship.isHitched = false
//ou
spaceship["shieldLevel"] = 100

console.log(spaceship["isHitched"])

console.log(spaceship.shieldLevel)
*/

let spacialStation = {
    name: "Fenix",
    platformsQuantity: 10,
    //ou

    "new name": "Estelar", // evitar
    true: false, // evitar
    2: "Descoberta" //evitar
}

console.log(spacialStation[2])

console.log(spacialStation["new name"]) //evitar
