console.log(speedUp(60,10)) //executou normalmente - função tradicionais -> podem ser chamadas em qualquer parte do código

console.log(doubleSpeed(50)) // error - funções anônimas seguem a regra de uma chamada de variável



let doubleSpeed = function (velocity) {
    return velocity * 2
}

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

