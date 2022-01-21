function speedUp ( velocity, acceleration ) {

    let newVelocity = velocity + acceleration 

    console.log("Nova velocidade: " + newVelocity)

    return newVelocity
}

// 1) Forma
let velocity = 80

let acceleration = 5

console.log(velocity)

velocity = speedUp (velocity, acceleration)

console.log(velocity)
// 2) Forma
console.log(speedUp(90, 10)) 
// 3) Forma
speedUp(100, 20)
