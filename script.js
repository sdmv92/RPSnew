let buttons = document.querySelector("#buttons")
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scissor")
let display = document.querySelector("#display")

buttons.addEventListener("click", function(event){
    let target = event.target
    let humanChoice = ""

    switch (target.id) {
        case "rock":
            humanChoice = "rock"
            playRound(humanChoice)
            break;
        case "paper":
            humanChoice = "paper"
            playRound(humanChoice)
            break;
        case "scissor":
            humanChoice = "scissor"
            playRound(humanChoice)
            break;
    }
})

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
        display.textContent = "It's a tie"
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        display.textContent = "You loose! Paper beats rock"
        computerScore++
    }else if(humanChoice == "rock" && computerChoice == "scissor"){
        display.textContent = "You win! rock beats scissor"
        humanScore++
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        display.textContent = "You win! Paper beats rock"
        humanScore++
    }else if(humanChoice == "paper" && computerChoice == "scissor"){
        display.textContent = "You loose! scissor beats paper"
        computerScore++
    }else if(humanChoice == "scissor" && computerChoice == "rock"){
        display.textContent = "You loose! rock beats scissor"
        computerScore++
    }else if(humanChoice == "scissor" && computerChoice == "paper"){
        display.textContent = "You win! scissor beats paper"
        humanScore++
    }

}

function playRound(humanChoice){

    display.style.fontSize = '20px'
    playGame(humanChoice, getComputerChoice())
    display.textContent += `\nYour score:    ${humanScore}`
    display.textContent += `\nComputer score:    ${computerScore}`  

    if(humanScore==5 && computerScore < 5){
        display.style.fontSize = '30px'
        display.textContent = "\nYOU WON THE GAME!!!"
        humanScore = 0
        computerScore = 0
    }else if(humanScore==5 && computerScore > 5){
        display.style.fontSize = '30px'
        display.textContent = "\nSORRY YOU LOOSE!!!"
        humanScore = 0
        computerScore = 0
    }else if(humanScore==5 && computerScore == 5){
        display.style.fontSize = '30px'
        display.textContent = "\nIT'S A TIE"
        humanScore = 0
        computerScore = 0
    }   
}


