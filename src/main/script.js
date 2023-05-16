const startBox = document.getElementsByClassName('startDisplay')[0]
const gameBox = document.getElementsByClassName('gameDisplay')[0]
const box = "<div class='boxToClick' onclick='respawnBox()' ></div>"
var gameT = 0
var wins = 0 
var loss = 0

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function respawnBox(){
    if(gameT < 50) {
        let last = document.getElementsByClassName("boxToClick")[0]
        if (last){
            last.remove();
        }
        let newHomeW = getRandomIntInclusive(1, 10)
        let newHomeH = getRandomIntInclusive(1, 10)
        if(newHomeW > 10)
            newHomeW=10
        if(newHomeH > 10)
            newHomeH=10
        if(newHomeW < 0)
            newHomeW = 0
        if(newHomeH < 0)
            newHomeH = 0
        document.getElementsByClassName("row"+newHomeW+"-colum"+newHomeH)[0].innerHTML = box
        var thisT = gameT
        setTimeout(()=>{
            if (thisT == gameT){
                loss = loss + 1
                gameT = gameT + 1
                respawnBox()
            }else {
                wins = wins + 1
                gameT = gameT + 1
            }
        }, 2000)
    }else{
        startBox.style.display = 'grid'
        gameBox.style.display = 'none'
        document.getElementById("results").innerHTML = "Bolas: "+gameT+" | Acertos: "+wins+" | Erros: "+loss+""
        gameT = 0
        wins = 0 
        loss = 0
        document.getElementsByClassName("boxToClick")[0].remove();
    }
    
}

function initGame(){
    let newHomeW = getRandomIntInclusive(1, 10)
    let newHomeH = getRandomIntInclusive(1, 10)
    if(newHomeW > 10)
        newHomeW=10
    if(newHomeH > 10)
        newHomeH=10
    if(newHomeW < 0)
        newHomeW = 0
    if(newHomeH < 0)
        newHomeH = 0       
    gameT = 1 
    document.getElementsByClassName("row"+newHomeW+"-colum"+newHomeH)[0].innerHTML = box
    var thisT = gameT
    setTimeout(()=>{
        if (thisT == gameT){
            loss = loss + 1
            gameT = gameT + 1
            respawnBox()
        }else {
            wins = wins + 1
            gameT = gameT + 1
        }
    }, 2000)
}

function startClick(){
    startBox.style.display = 'none'
    gameBox.style.display = 'grid'

    initGame()
}