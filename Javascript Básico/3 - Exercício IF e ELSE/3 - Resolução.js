let pilotName = prompt("Qual seu nome, piloto? ")

let velocity = 0

let newVelocity = prompt("A que velocidade, você gostaria de acelerar? ")

let confirmVelociy = confirm("Estamos acelerando para " + newVelocity + " Km/s")

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else {
    if (velocity < 40) {
        alert("Você está devagar. Podemos aumentar mais.")
    }
    else {
        if (velocity < 80) {
            alert("Parece uma boa vekicudade para manter.")
        } else {
            if (velocity < 100) {
                alert("Velocidade alta. Considere diminuir")
            } else {
                alert("Velocidade perigosa. Controle automático forçado")
            }
        }
    }
}
