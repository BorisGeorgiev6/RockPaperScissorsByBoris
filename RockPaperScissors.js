function game(input){
const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
let playerTurn = input[0]
if (playerTurn == "r" || playerTurn == "rock" ){
playerTurn =rock
}else if (playerTurn == "p" || playerTurn == "paper" ){
    playerTurn =paper
    }else if (playerTurn == "s" || playerTurn == "scissors" ){
        playerTurn =scissors
        }else {
            console.log("Invalid Input. Try Again...");
        }

        let computrRandomNumber = Math.floor(Math.random()*3+1)
let computerMove = ""
        switch(computrRandomNumber){
            case 1:computerMove = rock
            case 2:computerMove = paper
            case 3:computerMove = scissors
        }
        console.log(`The computer chooses ${computerMove}`);

        if((playerTurn === rock && computerMove ===scissors) || (playerTurn === paper && computerMove === rock)||(playerTurn===scissors && computerMove === paper)){
            console.log("You win!");
        }else if((playerTurn === rock && computerMove ===paper) || (playerTurn === paper && computerMove === scissors)||(playerTurn===scissors && computerMove === rock)){
            console.log("You lose!");
        }else{
            console.log("This game was a draw!");
        }
    }
    game("p")