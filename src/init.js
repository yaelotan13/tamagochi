const TICK_RATE = 3000;

function tick() {
  console.log("ticking...", Date.now());
}

async function init() {
  console.log('starting game');
  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (now >= nextTimeToTick) {
      tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
