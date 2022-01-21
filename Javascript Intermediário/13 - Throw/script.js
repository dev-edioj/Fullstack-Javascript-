class SpaceshipWeapon {
    constructor(identifier) {
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot(){
        if(this.shotsLeft > 0) {
            console.log("Bang!")
            this.shotsLeft -= 1
        } else {
            throw new Error("Arma " + this.identifier + " Sem munição")
        }
            
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)
