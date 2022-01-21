let spaceship = {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        alert("Preparando propulsão")
        alert("Ligando computador de bordo")
    }
}
spaceship.velocity = 0

spaceship.speedUp = function( acceleration) {
this.velocity += acceleration
}

console.log(spaceship)

spaceship.speedUp(10)

console.log(spaceship)
aa
