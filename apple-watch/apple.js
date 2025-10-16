const imgVisualizacao = document.querySelector('#visualizacao img')
const tituloProduto = document.querySelector('h1')
const nomeCorSelecionada = document.querySelector('#nome-cor-selecionada')

const imgMiniatura0 = document.querySelector('[for="0-imagem"] img')
const imgMiniatura1 = document.querySelector('[for="1-imagem"] img')
const imgMiniatura2 = document.querySelector('[for="2-imagem"] img')

const opcoesTamanho = ['41 mm', '45 mm']
const opcoesCores = [
    'Verde-cipreste',
    'Azul-inverno',
    'Meia-noite',
    'Estelar',
    'Rosa-claro'
]

let numImgSelecionada = 1
let numTamanhoSelecionado = 1
let numCorSelecionada = 1

function atualizarImagemSelecionada() {
    const opcaoImgSelecionada = document.querySelector('[name="opcao-imagem"]:checked').
    id.charAt(0) 
    // o método charAt() no JavaScript é usado para encontrar o caractere em uma posição específica (índice) em uma string
    numImgSelecionada = opcaoImgSelecionada

    imgVisualizacao.src = `assets/imagens/opcoes-cores/imagens-${opcoesCores[numCorSelecionada].toLowerCase()}/imagem-${numImgSelecionada}.jpeg`
}

function atualizarTamanho() {
    const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0)

    numTamanhoSelecionado = opcaoTamanhoSelecionado
    const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado]

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[numCorSelecionada].toLowerCase()} para caixa de ${tamanhoCaixa}`

    if (tamanhoCaixa === '41 mm') {
        imgVisualizacao.classList.add('caixa-pequena')
    } else {
        imgVisualizacao.classList.remove('caixa-pequena')
    }
}

function atualizarCorSelecionada() {
    const opcaoCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0)

    numCorSelecionada = opcaoCorSelecionada

    const nomeCor = opcoesCores[numCorSelecionada]
    
    tituloProduto.innerText = `Pulseira loop esportiva ${nomeCor.toLowerCase()} para caixa de ${opcoesTamanho[numTamanhoSelecionado]}`

    nomeCorSelecionada.innerText = `Cor - ${nomeCor}`

    // Atualizando a Imagem

    imgVisualizacao.src = `assets/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-${numImgSelecionada}.jpeg`

    imgMiniatura0.src = `assets/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-0.jpeg`

    imgMiniatura1.src = `assets/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-1.jpeg`
    
    imgMiniatura2.src = `assets/imagens/opcoes-cores/imagens-${nomeCor.toLowerCase()}/imagem-2.jpeg`
}