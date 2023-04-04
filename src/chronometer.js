class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime += 1;

      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);

  }

  getMinutes() {
    const min = this.currentTime / 60
    const minRound = Math.floor(min)
    return minRound
  }

  getSeconds() {
    const sec = this.currentTime % 60
    return sec
  }

  computeTwoDigitNumber(value) {

    const str = String(value)

    if (str.length === 1) {
      return "0" + value
    } else {
      return str
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.computeTwoDigitNumber(this.getMinutes())
    const sec = this.computeTwoDigitNumber(this.getSeconds())

    return min + ":" + sec
    
  }
}
