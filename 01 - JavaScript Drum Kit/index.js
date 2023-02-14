const keys = document.querySelectorAll(".key");
keys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}`);
  if (!audio) return; // stops from running
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if not transform
  this.classList.remove("playing");
}



window.addEventListener("keydown", playSound);