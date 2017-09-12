$( document ).ready(function() {


var winCounter = 0;
var lossCounter = 0;
var totalScore;
// variables for crystal amounts
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;
// variables for goal amount
var goalNum;

startGame();
playGame();


function winOrLose() {
// if total score is less than the goal number, keep playing
// if total score is exactly equal to goal number, add one to win counter, reset total score, 
// and assign new random values to crystals and the goal number.
if (totalScore === goalNum) {
	winCounter++;
	$("#wins").text("Wins: " + winCounter);
	startGame();
}


// if total score is greater than the goal number, add one to loss counter, reset total score,
// and assign new random values to crystals and the goal number
else if (totalScore > goalNum) {
	lossCounter++;
	$("#losses").text("Losses: " + lossCounter);
	startGame();
};
};


function playGame() {
// on click, crystal value is added to total score
$("#crystal1").on("click", function() {
	totalScore = totalScore + crystalOne;
	$("#score").text("Score: " + totalScore);
	winOrLose();
});
$("#crystal2").on("click", function() {
	totalScore = totalScore + crystalTwo;
	$("#score").text("Score: " + totalScore);
	winOrLose();
});
$("#crystal3").on("click", function() {
	totalScore = totalScore + crystalThree;
	$("#score").text("Score: " + totalScore);
	winOrLose();
});
$("#crystal4").on("click", function() {
	totalScore = totalScore + crystalFour;
	$("#score").text("Score: " + totalScore);
	winOrLose();
});
};




// start game function
function startGame() {
// total score set equal to zero
totalScore = 0;
// generate a random number for the goal number, between 19-120
goalNum = Math.floor(Math.random() * 102) + 19;
$("#goal").text("Goal: " + goalNum);
// assign each crystal a random value between 1-12
crystalOne = Math.floor(Math.random() * 12) + 1;
crystalTwo = Math.floor(Math.random() * 12) + 1;
crystalThree = Math.floor(Math.random() * 12) + 1;
crystalFour = Math.floor(Math.random() * 12) + 1;
};






});
