let userScore = 0;
let compScore = 0;
const userScore_Span = document.getElementById('user-score');
const compScore_Span = document.getElementById('computer-score');
const scoreboard_div = document.getElementById('.score-board');
const result_div = document.getElementById('write');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissor_div = document.getElementById('scissor');

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_Span.innerHTML = userScore;
    result_div.innerHTML = `${userChoice} beats ${computerChoice}, You Win`;
    // console.log(`${userChoice} beats ${computerChoice}, You Win`);
}

function lose(userChoice, computerChoice){
    compScore++;
    compScore_Span.innerHTML = compScore;
    result_div.innerHTML = `${userChoice} got beaten by ${computerChoice}, You Lose`;
    // console.log(`${userChoice} beats ${computerChoice}, You Win`);
}

function draw(){
    console.log('Draw');
    result_div.innerHTML = "It's a Draw.";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case 'RockScissor':
        case 'PaperRock' :
        case 'ScissorPaper': win(userChoice, computerChoice);
            break;
        case 'RockPaper' :
        case 'PaperScissor':
        case 'ScissorRock': lose(userChoice, computerChoice);
            break;
        default : draw();
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('Rock');
    })

    paper_div.addEventListener('click', function () {
        game('Paper');
    })

    scissor_div.addEventListener('click', function () {
        game('Scissor');
    })
}

main();