
/* 
document = HTML
LET é pra criar variavel
FUNCTION é pra criar função 
querySelector seleciona

*/

let imagem = document.querySelector(".copao")

let fundo = document.querySelector(".circulo")

function troca_imagem(endereco){ 
    imagem.src = endereco
}

function troca_fundo(cor){
    fundo.style.background = cor
}
