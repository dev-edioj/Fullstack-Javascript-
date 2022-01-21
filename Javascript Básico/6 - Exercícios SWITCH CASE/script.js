
let distanceInLY = prompt("Digite a distância em anos-luz")

let chosenOption= prompt("Qual Operação deseja realizar? \nEscolha uma opção: \n 1  - Parsec (pc) \n 2 - Unidade astronônima (au) \n 3 - Quilometros (km)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanceInLY * 0.306601
        break

    case "2": 
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanceInLY * 63241.1
        break
            
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance =  distanceInLY * 9.5 * Math.pow(10,12)
        break

    default: 
    chosenUnity = "Unidade não identificada"
    convertedDistance = "Conversão fora do escopo"
}

alert("Distância em anos-luz: " + distanceInLY + "\n " + chosenUnity + ": " + convertedDistance)
