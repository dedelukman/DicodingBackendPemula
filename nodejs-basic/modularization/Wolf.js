class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    console.log("Auuuuu!");
  }
}

module.exports = Wolf;
