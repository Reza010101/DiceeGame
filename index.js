document.querySelector(".element1 button").addEventListener("click" , play)
var player1Score = 0;
var player2Score = 0;
document.querySelector("#p1").innerHTML = `Player 1 : ${player1Score}`;
document.querySelector("#p2").innerHTML = `Player 2 : ${player2Score}`;


function play(){
    var randomDIceePlayer1 = Math.floor(Math.random()*6)+1;
    var dicePlayer1 = document.querySelector(".element2 .image");
    var images = ["./assets/dominoes-dice-1.png","./assets/dominoes-dice-2.png","./assets/dominoes-dice-3.png","./assets/dominoes-dice-4.png","./assets/dominoes-dice-5.png","./assets/dominoes-dice-6.png"];
    for(var i=0;i<6;i++){
        if(i+1 === randomDIceePlayer1){
            dicePlayer1.setAttribute("src",images[i]);
        }
    }

    var randomDIceePlayer2 = Math.floor(Math.random()*6)+1;
    var dicePlayer2 = document.querySelector(".element3 .image");
    for(var i=0;i<6;i++){
        if(i+1 === randomDIceePlayer2){
            dicePlayer2.setAttribute("src",images[i]);
        }
    }
    if(randomDIceePlayer1 > randomDIceePlayer2){
        player1Score++;
    }
    if(randomDIceePlayer1 < randomDIceePlayer2){
        player2Score++;
    }
    document.querySelector("#p1").innerHTML = `Player 1 : ${player1Score}`;
    document.querySelector("#p2").innerHTML = `Player 2 : ${player2Score}`;
}
    