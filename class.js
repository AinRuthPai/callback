class Counter {
  constructor(runEvery5Times) {
    this.counter = 0;
    this.callback = runEvery5Times;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printNum(num) {
  console.log(`haha ${num}`);
}

function alertNum(num) {
  alert(`wow! ${num}`);
}

const printCounter = new Counter(printNum);
const alertCounter = new Counter(alertNum);

printCounter.increase(printNum);
printCounter.increase(printNum);
printCounter.increase(printNum);
printCounter.increase(printNum);
printCounter.increase(printNum);

alertCounter.increase(alertNum);
alertCounter.increase(alertNum);
alertCounter.increase(alertNum);
alertCounter.increase(alertNum);
alertCounter.increase(alertNum);
