alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

let nome = prompt("Qual é o seu nome ?")

let age = prompt("Informe sua idade ")

let ageConfirmation = confirm("Sua idade é " + age + " anos")

alert("Nome: " + nome)
alert("Idade: " + age)
alert("Idade confirmada: " + ageConfirmation)

//Ou 

alert("Nome: " + nome + "\nIdade: " + age +"\nIdade confirmada: " + ageConfirmation)
