const btnPlayPause = document.querySelector('#play-pause')
const btnProximo = document.querySelector('#proximo')
const btnAnterior = document.querySelector('#anterior')
const audio = document.getElementById('audio-capitulo')
const textoCapitulo = document.querySelector('#capitulo')
const qtdCapitulos = 10

let playing = false
let capituloAtual = 1

btnPlayPause.addEventListener('click', tocarOuPausar)
btnProximo.addEventListener('click', proximoCapitulo)
btnAnterior.addEventListener('click', capituloAnterior)

function tocarOuPausar() {
    if (playing === true) {
        audio.pause()
        playing = false
    } else {
        audio.play()
        playing = true
    }
    atualizarCapitulo()
    btnPlayPause.classList.toggle('tocando') 
}

function proximoCapitulo() {
    audio.pause()
    playing = false
    if (capituloAtual < qtdCapitulos) {
        capituloAtual++
    } else {
        capituloAtual = 1
    } 
    audio.src = `assets/audios/${capituloAtual}.mp3`
    atualizarCapitulo()
    btnPlayPause.classList.remove('tocando') 
}

function capituloAnterior() {
    audio.pause()
    playing = false
    if (capituloAtual === 1) {
        capituloAtual = qtdCapitulos
    } else {
        capituloAtual = capituloAtual - 1
    }
    audio.src = `assets/audios/${capituloAtual}.mp3`
    atualizarCapitulo()
    btnPlayPause.classList.remove('tocando')
}

function atualizarCapitulo() {
    textoCapitulo.innerText = `Capítulo ${capituloAtual}`
}