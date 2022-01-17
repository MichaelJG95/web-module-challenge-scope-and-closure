// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
    -counter1 declares the count variable privately inside the countermaker function
    while counter2 declares count in global space
  
  2. Which of the two uses a closure? How can you tell?
    -counter1 uses closure, the anonymous function inside function counterMaker uses closure to access the 
    variable counter andvanceing it by one and returning 
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
     - if the variable count is not needed elsewhere counter 1 keeps count private, but if count is needed by
     other code counter keeps it abaiable
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
    return Math.floor(Math.random() * 3);
}

console.log(inning());

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inningCB, innings){
  let away = 0;
  let home = 0
  for(let i = 0; i < innings; i++){
    away += inningCB();
    home += inningCB();
  }
  return {Away: away, Home: home};
}

console.log(finalScore(inning, 5));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(inningCB) {
  return {Away:  inningCB(), Home:  inningCB()}
}

console.log(getInningScore(inning));

/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(inningScoreCB, inningCB, innings) {
  // make a new array to store the values for each inning
  const inningsArray = [];
  
  //loop through the required number of innings
  for(let i = 0; i < innings; i++){
    //push the score for each inning to our inningsArray
    inningsArray.push(inningScoreCB(inningCB));
  }
  // we will reformat the data from inningsArray to match the project requirements and add on the final score into inningsArrayFormated. we will return this array at the end.
  const inningsArrayFormated = []
  // delcare a variable finalScore to hold the values for home and away as we loop through them in the next step
  let finalScore = {away: 0, home: 0}
  // loop through inningsArrat to tally the final score, reformating into inningsArrayFormated as we go
  for(let i = 0; i < inningsArray.length; i++){
    //add the scores for home and away to finalScore each iteration
    finalScore.away += inningsArray[i]['Away'];
    finalScore.home += inningsArray[i]['Home'];
    //reformat into inningsArrayFormated while we're at it
    inningsArrayFormated.push( `Inning ${i + 1}: Away ${inningsArray[i]['Away']} - Home ${inningsArray[i]['Home']}`);
  }
  //check for a tie, push the appropriately formated option for final score to inningsArrayFormated 
  if(finalScore.home !== finalScore.away){
    inningsArrayFormated.push(`Final Score: Away ${finalScore.away} - Home ${finalScore.home}`);
  } else {
    inningsArrayFormated.push(`This game will require extra innings: Away ${finalScore.away} - Home ${finalScore.home}`);

  }
  //return the array containg the formated score for each inning with the final score at the end
  return inningsArrayFormated;
}

console.log(scoreboard(getInningScore,inning,9));


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
