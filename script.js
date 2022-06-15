
// Base

// Recognise 2 players. Welcome the players, and ask Player 1 to start first
// Require game mode

// Random dice roll x2
// Player chooses the order of the dice. Keep final result

// Let player 2 take their turn
// Compare the 2 dice results and tell who wins
// Restart game

// v2. refactor code to include player 2
// v3. compare dice scores and declare winner
// v4 reset the game for continous rounds


// version breakdown
// v1. Roll 2 dice and return output for 1 player. Player chooses dice order and gets the correct output
// Use loop to auto roll 2 dice, and store the results via push
// Let user choose dice order by selecting the position in the array index. 
// Implement input validation

var GAME_STATE_ROLL_DICE = 'GAME_STATE_ROLL_DICE';
var GAME_STATE_DICE_ORDER = 'GAME_STATE_DICE_ORDER';
var gameState = 'GAME_STATE_ROLL_DICE';
var playerRolls = [];

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;
  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;
  return diceNumber;
};  

var rollDiceTwiceForPlayer = function() {
  var counter = 0;
  while (counter < 2) {
    playerRolls.push(rollDice());
    counter++;    
  }
  console.log ('playerRolls', playerRolls)
  return `Player 1 rolled Dice 1: ${playerRolls[0]} and Dice 2: ${playerRolls[1]}. <br> Please select your dice order by inputting '1' or '2'.`
};

var diceOrderResult = function (userInput) {
  if (userInput == 1) {
  console.log('Flow if user input 1')
  var playerResult = Number(String(playerRolls[0])+String(playerRolls[1]));
  return `Your dice result is ${playerResult}.`
  }

  if (userInput == 2) {
  console.log('Flow if user input 2')
  var playerResult = Number(String(playerRolls[1])+String(playerRolls[0]));
  return `Your dice result is ${playerResult}.`
  }

  if (userInput !== 1 && userInput !== 2) {
  console.log('Flow if user does not input 1 or 2')
  return `You have keyed in an unknown number. Please key in either '1' or '2'.`
  }
};

var main = function (userInput) {
  console.log('gameStateUponSubmit', gameState)
    if (gameState == GAME_STATE_ROLL_DICE) {
      var myOutputMessage = rollDiceTwiceForPlayer();
      gameState = GAME_STATE_DICE_ORDER;
      console.log('gameStateAfterDiceRolled', gameState)
      return myOutputMessage; 
    }

    if (gameState == GAME_STATE_DICE_ORDER) {
      console.log('gameStateDiceOrder', gameState)
      myOutputMessage = diceOrderResult(userInput);
      return myOutputMessage;
    }
};
 