let gamePattern = [];

let userClickedPattern = [];

const buttonColours = ['red', 'blue', 'green', 'yellow'];

let started = false;

let level = 0;

//Start game with keyboard press

$(document).on('keypress touch'(function() {
  if (!started){
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
  }
})

//colour sequence generator.  Adds colour to game pattern array, calls sound, and increments level number and h1 text

function nextSequence(){
    userClickedPattern = [];
    level++;
    $('#level-title').text('Level ' + level);
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $('#'+randomChosenColour).fadeTo(250, 1).fadeTo(250, 0.5);
    playSound(randomChosenColour);
  }

//Checks if user choice matches generated choice
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(userClickedPattern.length === gamePattern.length){
      setTimeout(function (){
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong');
    console.log('incorrect');
    $('body').addClass('game-over');
    $('#level-title').text('Game Over, Press Any Key to Restart');
    setTimeout(function(){
      $('body').removeClass('game-over')
    }, 250);
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}

//user colour choice.  Adds choice to user's pattern array, and calls sound and animation

$('.btn').click(function(){
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});

//plays relevent sound upon click

function playSound(name){
  let audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

// plays relevant animation upon click

function animatePress(currentColour){
  $('#' + currentColour).addClass('pressed');
  setTimeout(function(){
  $('#' + currentColour).removeClass('pressed')}, 250);
}
