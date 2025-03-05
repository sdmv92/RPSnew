function getHumanChoice(){
    let userInput =  prompt("Rock, Paper or Scissor")
    userInput.toLowerCase();
    console.log(userInput)
    if(userInput == "rock" || userInput == "paper" || userInput == "scissor"){
        return userInput
    }else{
        alert("Enter a valid input")
        getHumanChoice()
        
    }
}

function getComputerChoice(){
    let randomValue = Math.floor(Math.random() * (4 - 1) + 1);
    switch (randomValue) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissor"
    }
}

let humanScore = 0
let computerScore = 0

function playGame(humanChoice, computerChoice){
    
    if(humanChoice==computerChoice){
        console.log("It's a tie")
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You loose! Paper beats rock")
        computerScore++
    }else if(humanChoice == "rock" && computerChoice == "scissor"){
        console.log("You win! rock beats scissor")
        humanScore++
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock")
        humanScore++
    }else if(humanChoice == "paper" && computerChoice == "scissor"){
        console.log("You loose! scissor beats paper")
        computerScore++
    }else if(humanChoice == "scissor" && computerChoice == "rock"){
        console.log("You loose! rock beats scissor")
        computerScore++
    }else if(humanChoice == "scissor" && computerChoice == "paper"){
        console.log("You win! scissor beats paper")
        humanScore++
    }

}

function playRound(){
    let round = 0
    while(round<5){
        playGame(getHumanChoice(), getComputerChoice())
        console.log(`Your score is ${humanScore}`)
        console.log(`Computer score is ${computerScore}`)
        round++
    } 

    if(humanScore > computerScore){
        console.log("YOU WON THE GAME!!!")
    }else if(humanScore < computerScore){
        console.log("SORRY YOU LOOSE!!!")
    }else{
        console.log("IT'S A TIE")
    }   
}

playRound()

