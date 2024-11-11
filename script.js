// Object for result tracking
let score = {
  wins: 0,
  losses: 0,
  ties: 0 
};

// playerMove = different parameter, can be: Rock, Paper, Scissors, Spock or Lizard
function playGame(playerMove){
  // computerMove = function
  const computerMove = randomComputerMove(); 

  // Variable for result, empty by default
  let result = '';

  // Compare playerMove with computerMove - playerMove is Scissors
  if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
          result = 'You loose.'
      } else if (computerMove === 'Paper') {
          result = 'You win.' 
      } else if (computerMove === 'Scissors') {
          result = 'Tie.'
      } else if (computerMove === 'Spock') {
        result = 'You loose.'
      } else if (computerMove === 'Lizard') {
        result = 'You win.'
      }     

  // Compare playerMove with computerMove - playerMove is Paper
  } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
          result = 'You win.'
      } else if (computerMove === 'Paper') {
          result = 'Tie.'
      } else if (computerMove === 'Scissors') {
          result = 'You loose.'
      } else if (computerMove === 'Spock') {
        result = 'You win.'
      } else if (computerMove === 'Lizard') {
        result = 'You loose.'
      } 
  
  // Compare playerMove with computerMove - playerMove is Stone
  } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
          result = 'Tie.'
      } else if (computerMove === 'Paper') {
          result = 'You loose.'
      } else if (computerMove === 'Scissors') {
          result = 'You win.'
      } else if (computerMove === 'Spock') {
        result = 'You loose.'
      } else if (computerMove === 'Lizard') {
        result = 'You win.'
      } 

  // Compare playerMove with computerMove - playerMove is Spock
  } else if (playerMove === 'Spock') {
      if (computerMove === 'Rock') {
          result = 'You win.'
      } else if (computerMove === 'Paper') {
          result = 'You loose.'
      } else if (computerMove === 'Scissors') {
          result = 'You win.'
      } else if (computerMove === 'Spock') {
        result = 'Tie.'
      } else if (computerMove === 'Lizard') {
        result = 'You loose.'
      }
    
    // Compare playerMove with computerMove - playerMove is Spock
  } else if (playerMove === 'Lizard') {
      if (computerMove === 'Rock') {
          result = 'You loose.'
      } else if (computerMove === 'Paper') {
          result = 'You win.'
      } else if (computerMove === 'Scissors') {
          result = 'You loose.'
      } else if (computerMove === 'Spock') {
        result = 'You win.'
      } else if (computerMove === 'Lizard') {
        result = 'Tie.'
      }
  }

  // if-else statement for result tracking
  if (result === 'Tie.') {
      score.ties += 1;

  } else if (result === 'You loose.'){
      score.losses += 1;

  } else if (result === 'You win.') {
      score.wins += 1;
  }

  // Call function for score update on website (via innerHTML)
  udateScoreElement();

  // Display result after game played
  document.querySelector('.js-result').innerHTML = result;

  // Display choosed options by human and computer
  document.querySelector('.js-move-human').innerHTML = `Your choice: ${playerMove}`

  document.querySelector('.js-move-computer').innerHTML = `Computers choice: ${computerMove}`
}

// Function for updating score 
function udateScoreElement() {
  document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Function for computerMove
function randomComputerMove() {
  
  // Creates random number between 0 and 1
  const randomNumber = Math.random();
  
  // Variable for computer move, empty by default
  let computerMove = '';

  // Decide what to print according to random number
  if (randomNumber >= 0 && randomNumber < 1/5) {
      computerMove = 'Rock';
  } else if (randomNumber >= 1/5 && randomNumber < 2/5) {
      computerMove = 'Paper';
  } else if (randomNumber >= 2/5 && randomNumber < 3/5) {
      computerMove = 'Scissors';
  } else if (randomNumber >= 3/5 && randomNumber < 4/5) {
    computerMove = 'Spock';
  } else if (randomNumber >= 4/5 && randomNumber < 1) {
  computerMove = 'Lizard';
  }
  return computerMove;
}

// Function for score reset
function resetScore() {
  score.losses = 0;
  score.wins = 0;
  score.ties = 0;
  
  // Call function for score update to show new score on website (via innerHTML)
  udateScoreElement();
} 

// Call function to show initial score
udateScoreElement(); 

// Refresh page
function refreshPage() {
  location.reload()
}