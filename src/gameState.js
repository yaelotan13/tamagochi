const gameState = {
  current: "INIT",
  clock: 0,
  tick() {
    this.clock++;
    console.log('clock', this.clock);

    return this.clock;
  },
  handleUserAction(icon) {
    console.log('** icon **', icon)
  }
}

export default gameState;
