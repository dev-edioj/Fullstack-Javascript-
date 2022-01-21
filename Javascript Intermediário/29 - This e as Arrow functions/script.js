testingArrow = {
    name: "Escola de Javascript",
    normalFunction: function() {
        console.log(this.name) //obedece o escopo 
    },
    arrowFunction: () => {
        console.log(this.name) //obedece o contexto de onde ela é chamada 
    }
}

testingArrow.arrowFunction()
