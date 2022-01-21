let spaceship = prompt("Digite o nome da nave: ")

let charToReplace = prompt("Qual caracter você deseja substituir? ")

let replacementChar = prompt("Por qual caracter vocÊ deseja substituir? ")

let newSpaceship = ""

for (let pos = 0; pos < spaceship.length; pos ++) {
    if(spaceship[pos] == charToReplace) {
        newSpaceship += replacementChar 
    } else {
        newSpaceship += spaceship[pos]
    }
}

alert("O novo  nome da espaço nave é  " + newSpaceship)
