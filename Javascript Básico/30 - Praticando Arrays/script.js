const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}) .map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonvaes com mais de 9 tripulantes: " + crewGreaterThan9.join(",")

message += "\n Plataforma com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\n Espaçonaves destacadas: " + highlightedSpaceships.join(",")

alert(message)
