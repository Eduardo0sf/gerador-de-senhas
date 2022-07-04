let slideElement = document.querySelector('#slider')
let botaoElement = document.querySelector('#botao')

let sizePAssword = document.querySelector('#valor')
let passwordOriginal = document.querySelector('#password')

let containerPassword = document.querySelector('#container-pass')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-@*"

let newPass = ""

sizePAssword.innerHTML = slideElement.value

slider.oninput = function() {
    sizePAssword.innerHTML = this.value
}


function generatePassword() {
 let pass = ''
 for( let i = 0 , n = charset.length; i < slideElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n))
 }
 containerPassword.classList.remove("hide")
passwordOriginal.innerHTML = pass
 newPass = pass
}

function copyPassword() {
    navigator.clipboard.writeText(newPass)
    alert('copiado com sucesso')
}

