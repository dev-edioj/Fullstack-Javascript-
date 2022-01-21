let spaceship = "Helmet"
// trocar os caracteres "E" por "I" -> Mascará o nome da nava
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        newSpaceship += "i"
    } else {
        newSpaceship += spaceship[i]
    }
    
}

console.log(newSpaceship)
