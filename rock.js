const game = () => {
    let pScore = 0;
    let cScore= 0;

    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");

      playBtn.addEventListener("click" , () =>  {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
 });
    };
    const playMatch =() =>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".playerhand");
        const computerhand = document.querySelector(".computer=hand");
const computerOptions =["rock", "paper", "scissors"];
const hands =document.querySelectorAll(".hands img");
hands.forEach(hand =>{
    hand.addEventListener("animationend", function(){
        this.style.animation ="";
    });

});
 
 options.forEach(option => {
    option.addEventListener("click", function(){
const computerNumber  = Math.floor(Math.random() * 3);

setTimeout(() =>{
    compareHands(this.textContent, computerChoice);
    playerHand.src =`.assets/${this.textContent}.png`;
    computerHand.src =`.assets/${computerChoice}.png`;

},2000)


playerHand.style.animation ="shakePlayer 2s ease";
computerHand.style.animation ="shakeComputer 2s ease";
 });
 });

    };
    const updateScore =() =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice){
            winner.textContent = "Its A Tie";
            return;
        }
        if (playerChoice === "rock"){
            if (computerChoice === "scissors"){
                winner.textContent ="Player Wins";
                pScore++;
                return;
            } else{
                winner.textContent ="Computer Wins";
                cScore++;
                return;
        }


        }
        if (playerChoice ==="paper"){
            if (computerChoice === "scissors"){
                winner.textContent ="Computer Wins";
                pScore++;
                return;
            }else {
                winner.textContent ="Player Wins";
                cScore++;
                return;

            }
        }
        if (playerChoice ==="scissors"){
            if (computerChoice ==="rock"){
                winner.textContent ="Computer Wins";
                pScore++;
                return;

    }else{
        winner.textContent ="Player Wins";
        cScore++;
        return;
    }
    }
    startGame();
    platMatch();
};
game();

 
}
