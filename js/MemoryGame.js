//CLASSES

class MemoryGame{
    constructor(){
        this.player = "";
        this.points = 5;


        this.deck = [
            "./assets.harmonia.cvg",
            "./assets.poder.cvg",
            "./assets.projetar.cvg",
            "./assets.refletir.cvg",
            "./assets.harmonia.cvg",
            "./assets.poder.cvg",
            "./assets.projetar.cvg",
            "./assets.refletir.cvg",
        ]


    }


    rederDeck(){
        // randomizar o deck - shuffle
        this.deck.sort(()=>{
            return Math.random() - 0.5 //isso é o que vai fazer o sort dar um valor numérico às imagens e poder chegar a um valor menor que zero
            let board = document.getElementById('board')
        
        })
    }
    // capturar o board
    

}




