let nome = prompt("Nome do Piloto:")
let vel =  0
vel = prompt("A que velocidade você gostaria de acelerar a nave?")

confirm("Você está indo para velocidade " + vel + " km/s")

if (vel < 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (vel < 40) {
    alert("Você está devagar, podemos aumentar mais")
} else if (vel >= 40 && vel < 80) {
    alert("Parece uma boa velocidade para manter")
} else if (vel >= 80 && vel < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    if (vel >= 100)
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Nome do piloto: " + nome + "\n Velocidade atual: " + vel + " km/s")
