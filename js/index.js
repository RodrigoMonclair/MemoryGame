//1ºcapturando todos os elementos do html
const startScreen = document.getElementById('star-screen')
const inputName = document.getElementById('input-name')
const gameScreen = document.getElementById('game-screen')
const gameScore = document.getElementById('game-score')
const playerName = document.getElementById('name')
const points = document.getElementById('points')
const board = document.getElementById('board')
const btnStart = document.getElementById('btn-start')

// adicionar o event lestener no btnStart

btnStart.addEventListener('click', ()=>{


    startScreen.classList.add("hide") // aqui adiciona mais uma classe às já existentes
    //mostrar o gameScore
    gameScore.className = "show" // aqui apaga todas as que tinha e adiciona as que estiverem aí
})