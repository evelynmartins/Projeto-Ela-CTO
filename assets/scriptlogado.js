const anotacao = document.querySelector("#opiniao")
const botaoSalvarA = document.querySelector("#salvarAnotacao")

function salvarAnotacao() {
    const anotado = anotacao.value
    alert(anotado)
}
botaoSalvarA.addEventListener("click", salvarAnotacao ) 

const fs=require("fs")