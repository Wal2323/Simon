const gamePattern = [];

const userClickedPattern = [];

const buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeTo(250, 1).fadeTo(250, 0.5);
    playSound(randomChosenColour);
  }

$('.btn').click(function(){
  let userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name){
  let audio = new Audio('sounds/' + name + '.mp3');
  console.log(audio);
  audio.play();
}

function animatePress(currentColour){
  console.log($("."+currentColour));
  $("." + currentColour).addClass('pressed');
  setTimeout(function(){
    $("." + currentColour).removeClass('pressed')}, 250);
}

nextSequence();
