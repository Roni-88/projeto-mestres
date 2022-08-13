const btnAvancar = document.getElementById ('btn-avancar')
const btnVoltar = document.getElementById ('btn-voltar')
const cartoes = document.querySelectorAll ('.cartao')
let cartaoAtual = 0

function esconderCartaoSelecionado () {
    const cartaoSelecionado = document.querySelector ('.selecionado')
    cartaoSelecionado.classList.remove ('selecionado')
}

function mostrarCartao (indiceCartao) {
    cartoes [indiceCartao].classList.add ('selecionado')
}

btnAvancar.addEventListener ('click', function () {
    if (cartaoAtual === 0) {
        btnVoltar.classList.remove ('opaco')       
    }
    
    if (cartaoAtual === cartoes.length -2) {
        btnAvancar.classList.add ('opaco')
    }
 
    esconderCartaoSelecionado ()
    cartaoAtual++   
    mostrarCartao (cartaoAtual)
})

btnVoltar.addEventListener ('click', function () {
    if (cartaoAtual === 1) {
        btnVoltar.classList.add ('opaco')
    }

    if (cartaoAtual === cartoes.length -1) {
        btnAvancar.classList.remove ('opaco')
    } 

    esconderCartaoSelecionado ()
    cartaoAtual--   
    mostrarCartao (cartaoAtual)
})
