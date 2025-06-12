const butters = {
  firstName: "Butters",
  lastName: "Cluckly",
  greet: function () {
    console.log("this is: ", this);
    return `Hello ${this.firstName} ${this.lastName}`;
  },
};

const fluffy = {
  firstName: "Fluffy",
  lastName: "Meowson",
};

function greetFluffy() {
  return butters.greet.call(fluffy);
}

const callGreet = butters.greet.bind(fluffy);

class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(this.incrementTimer.bind(this), 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  incrementTimer() {
    console.log(this.tick++);
    if (this.tick > 4) {
      this.stop();
    }
  }
}

const timer = new Timer();
