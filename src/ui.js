export function modFox(state) {
  document.querySelector(".fox").className = `fox fox-${state}`;
}

export function modScene(state) {
  document.querySelector('.game').className = `game ${state}`;
}

export function togglePoopBag(show) {
  document.querySelector('.poop-bag').classList.toggle('hidden', !show);
}

export function writeModal(text = "") {
  document.querySelector('.modal').innerHTML = `<div class="modal-inner">${text}</div>`;
}

function pad(val) {
  const valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

export function countPlayingTime(seconds) {
  // let totalSeconds = 0;
  // setInterval(setTime, 1000);

  // function setTime() {
    const minutesLabel =  document.querySelector(".minutes");
    const secondsLabel = document.querySelector(".seconds");
    // ++totalSeconds;
    secondsLabel.innerHTML = pad(seconds % 60);
    minutesLabel.innerHTML = pad(parseInt(seconds / 60));
  // }

  // return totalSeconds;
}

