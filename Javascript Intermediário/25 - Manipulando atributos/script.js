function verifyEnablement(){
    let selectedValue = document.querySelector("select").value
    if (selectedValue == "disabled") {
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.getElementById("message")
        pElement.innerText = "DESABILITADO"
        pElement.style.color = "white"
        pElement.style.backgroundColor = "black"
    } else {
        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.getElementById("message")
        pElement.innerText = 
        pElement.style.color = "black"
        pElement.style.backgroundColor = "transparent"
    }
}
