// ANINHANDO OBJETOS E ARRAYS
let spaceship = {
    name: "supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Julia", "Thiago"]
}

spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)

// ANINHANDO ARRAY E OBJETOS
let spaceships = [
    { name: "Elemental", crewQuantity: 10},
    { name: "Colossus", crewQuantity: 8},
    { name: "Helmet", crewQuantity: 15}
]

spaceships.forEach(spaceship => {
    alert(spaceship.name + "tem " + spaceship.crewQuantity + "tripulantes.")
}) 

// ANINHANDO OBJETOS E OBJETOS
let spaceship = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 37
    }
}

console.log(spaceship.captain.name)
