
const randomChar = () => {
  return String.fromCharCode(Math.floor((Math.random() * 25) + 97));
}

// const subscribe = (observer) => {
//   const observable = {observer};
//   setInterval(() => {
//       const char = randomChar();
//       observer(char);
//   }, 200);
//   return observable;
// }


let count = 0;

const observer = (char) => {
  process.stdout.write(char);
  count++;
  if (count > 50) {
    process.stdout.write('/n');
    process.exit(0);
  }
}

// const observable = subscribe(observer);
// console.dir({observer, observable});  

// ----------- Implementation with classes: -----------

class Observable {
  constructor() {
    this.observer = null;
    setInterval(() => {
      if(!this.observer) return;
      const char = randomChar();
      this.observer(char);
    }, 200);
  }

  subscribe(observer) {
    this.observer = observer;
    return this;
  }
}

const observable = new Observable().subscribe(observer);
console.dir({observer, observable}); 