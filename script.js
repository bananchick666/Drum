const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('mousedown', playSound);
});

document.addEventListener('keydown', playSound);

function playSound(e) {
  if (e.type === 'mousedown' && e.which !== 1) return;

  const keyCode = e.type === 'mousedown' ? e.currentTarget.dataset.key : e.keyCode;
  const key = document.querySelector(`button[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!key) return;  


  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const mode = document.querySelector('.mode');
mode.addEventListener('click', changeMode);

function changeMode(e) {
  document.body.classList.toggle('light');
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "a":
    let clap = new Audio("sounds/clap.wav");
    clap.play();
    break;

    case "s":
    let hihat = new Audio("sounds/hihat.wav");
    hihat.play();
    break;

    case "d":
    let kick = new Audio('sounds/kick.wav');
    kick.play();
    break;

    case "f":
    let openhat = new Audio('sounds/openhat.wav');
    openhat.play();
    break;

    case "g":
    let boom = new Audio('sounds/boom.wav');
    boom.play();
    break;

    case "h":
    let ride = new Audio('sounds/ride.wav');
    ride.play();
    break;

    case "j":
    let snare = new Audio('sounds/snare.wav');
    snare.play();
    break;

    case "k":
    let tom = new Audio('sounds/tom.wav');
    tom.play();
    break;

    case "l":
    let tink = new Audio('sounds/tink.wav');
    tink.play();
    break;

    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {activeButton.classList.remove("pressed");}, 100);
}

