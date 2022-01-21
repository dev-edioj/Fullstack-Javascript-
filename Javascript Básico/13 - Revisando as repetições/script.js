let spaceshipName = prompt("Qual é nome da sua nave espacial?")

let invertedName = ""

for (let i = spaceshipName.length - 1; i >= 0; i--) {
    if (spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da página: " + spaceshipName + "\n  Nome após ocultação: " + invertedName)
