let spaceship = {
    velocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function acelerate(){
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert( "VELOCIDADE MÁXIMA ULTRAPASSADA!" + 
        "\n Velocidade da Nave: " + spaceship.velocity + " km/s" + 
        "\n Velocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert("Nome da nave: " + spaceship.name + "\nTipo: " + spaceship.type + "\n Velocidade da nave: " + spaceship.velocity + "\n Máxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja \n 1) Acelerar \n 2) Parar")
     switch (chosenOption) {
         case "1":
             acelerate()
             break
        case "2":
            stop()
            break
        default:
            alert("Opção inválida")
    }   
  } while (chosenOption != "2") 
}

registerSpaceship()

showMenu()
