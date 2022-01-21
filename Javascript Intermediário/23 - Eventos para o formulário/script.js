function save(){
    event.preventDefault()

    let name = document.querySelector(" input[name = 'name'] ").value

    let programmingLang = document.querySelector(" select[name = 'programming-lang'] ").value

    alert(" Nome : " + name + "\n Linguagem de programação: " + programmingLang)
}
