let warpCount = 0

let chosenOption = ""

let spaceshipName = prompt("Digite o nome da Nave")

chosenOption = prompt("Deseja entrar em dobra especial? \n 1 - Sim \n 2 - Não \n Se a resposta for sim, contabilizaremos uma dobra" )

while (chosenOption == "1") {
    warpCount += 1 // warpCount = warpaCount + 1
    chosenOption = prompt("Deseja realizar a próxima dobra especial? \n 1 - Sim \n 2 - Não")
} 

alert("Nave: " + spaceshipName + "\n Quantidade de Dobras: " + warpCount )
