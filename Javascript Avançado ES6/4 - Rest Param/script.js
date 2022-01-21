function greetCrew(message, ...names){ //rest param (sempre no final da function)
    names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja bem-vindo", "Arthur", "Jake", "Melissa")
