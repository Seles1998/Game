const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const message = document.getElementById('message');
const player = document.getElementById('player');
const comp = document.getElementById('comp');
const reset = document.getElementById('reset');

player.innerHTML = '0';
comp.innerHTML = '0';

let player_counter = 0;
let comp_counter = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let random = getRandomInt(3);

rock.addEventListener('click', function rock() {
  if (random == 2) {
    message.innerHTML = 'You lose computer choose paper.Choose Again';
    comp_counter++;
  } else if (random == 0) {
    message.innerHTML = 'You win computer choose scissors.Choose Again';
    player_counter++;
  } else {
    message.innerHTML = "It's tie.Choose Again";
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  random = getRandomInt(3);
  player.innerHTML = player_counter.toString();
  comp.innerHTML = comp_counter.toString();
});

paper.addEventListener('click', function paper() {
  if (random == 2) {
    message.innerHTML = 'You lose computer choose scissors.Choose Again';
    comp_counter++;
  } else if (random == 0) {
    message.innerHTML = 'You win computer choose rock.Choose Again';
    player_counter++;
  } else {
    message.innerHTML = "It's tie.Choose Again";
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  random = getRandomInt(3);
  player.innerHTML = player_counter.toString();
  comp.innerHTML = comp_counter.toString();
});

scissors.addEventListener('click', function scissors() {
  if (random == 2) {
    message.innerHTML = 'You lose computer choose rock.Choose Again';
    comp_counter++;
  } else if (random == 0) {
    message.innerHTML = 'You win computer choose paper.Choose Again';
    player_counter++;
  } else {
    message.innerHTML = "It's tie.Choose Again";
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  random = getRandomInt(3);
  player.innerHTML = player_counter.toString();
  comp.innerHTML = comp_counter.toString();
});

reset.addEventListener('click', function () {
  player.innerHTML = '0';
  comp.innerHTML = '0';
  player_counter = 0;
  comp_counter = 0;
  message.innerHTML = 'Game has been reset. Choose Again';
});
