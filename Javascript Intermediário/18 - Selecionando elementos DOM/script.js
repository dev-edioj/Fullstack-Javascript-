function show() {
    let element = document.getElementById("name") // Seleciona pelo ID
    let elemets = document.getElementsByName("phone") // Seleciona pelo Nome
    let elementos = document.querySelectorAll("div#phones input[name='phone']")// Seleção por seletores
    let elementis = document.getElementsByTagName("input") //Seleção por nome da Tag
    console.log(element)
    console.log(elemets)
    console.log(elementos)
    console.log(elementis)
}
