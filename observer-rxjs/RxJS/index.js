
function createSubscription(operatorName) {
	return {
		next: (x) => console.log(operatorName + ': ', x),
		error: (error) => console.log(operatorName + ': ', error),
		complete: () => console.log(operatorName + ': completed'),
	};
}

// ************************ FILTERING OPERATORS *************************

rxjs.of(1, 2, 4, 7, 'Hello', 'World', 5, 19)
  .pipe(rxjs.skipWhile((x)=> {
      return typeof x === 'number';
  }))
  .subscribe(createSubscription('skipWhile')); 

rxjs.of(1, 2, '4', '7', 'Hello', 'World', 5, 19)
  .pipe(rxjs.find((x)=> {
    if (typeof x === 'string') {
      return x.toLowerCase() === 'hello';
    }
  }))
  .subscribe(createSubscription('find')); 

rxjs.of(1, 2, '4', '7')
  .pipe(rxjs.first())
  .subscribe(createSubscription('first')); // the same operator last

// ************************ TRANSFORMATION OPERATORS *************************

rxjs.fromEvent(document.querySelector('.test-input'), 'keyup')
  .pipe(
    // rxjs.map(e => e.target.value), // the same as pluck below
    rxjs.pluck('target', 'value'),
    rxjs.map(x => x.toLowerCase()),
    rxjs.map(x => {
      return {
        value: x,
        length: x.length
      }
    })
  )
  .subscribe(createSubscription('map and puck'));

rxjs.of('hello', 'world', 'it is', 'map operator')
  .pipe(
    rxjs.map(x => x.toUpperCase()),
  )
  .subscribe(createSubscription('map in of'));

rxjs.interval(1000)
  .pipe(
    rxjs.map(x => x * 2),
    rxjs.take(10)
  )
  .subscribe(createSubscription('map in interval'));

// ************************ SIMPLE OPERATORS *************************


function delay(ms = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Delay after: ' + ms + ' promise successfully resolved.');
      }, ms)
  });
}

delay(3000).then(() => console.log('Promise was resolved.'));

// const promise$ = rxjs.from(new Promise((res, rej) => res('Promise resolved')));
const promise$ = rxjs.from(delay(4000));
promise$.subscribe(createSubscription('fromPromise'));

// ************************ SIMPLE OPERATORS *************************

rxjs.from([5, 3, 'string', 15, {a: 1}])
  .subscribe(createSubscription('from'));

rxjs.of(5, 9, 1, 'String', 7, [{ a: 1 }], 13).subscribe(
	createSubscription('of')
);

rxjs.interval(1000)
  .pipe(rxjs.take(10))
  .subscribe(createSubscription('interval'));

rxjs.timer(4000, 500)
  .pipe(rxjs.take(10))
  .subscribe(createSubscription('timer'));

rxjs.range(5, 15)
  .subscribe(createSubscription('range'));

// ************************ STREAM CREATION FROM EVENT *************************
const btn = document.querySelector('.btn');
const streamBtn$ = rxjs.fromEvent(btn, 'click');
streamBtn$.subscribe((e) => {
	console.log('Button Event: ', e);
});

// const input = document.querySelector('.test-input');
// rxjs.fromEvent(input, 'keyup').subscribe((e) => {
// 	console.log(e.target.value);
// });

rxjs.fromEvent(document, 'mousemove').subscribe((e) => {
	document.querySelector('h1').innerHTML = `
	  X: ${e.clientX},
	  Y: ${e.clientY},
	`;
});

// ************************ STREAM CREATION *************************

const stream$ = rxjs.Observable.create((observer) => {
	observer.next('One');

	setTimeout(() => {
		observer.next('After 5 sec');
	}, 5000);

	setTimeout(() => {
		observer.complete('Completed.');
	}, 1000);

	setTimeout(() => {
		observer.error('Something went wrong...');
	}, 500);

	setTimeout(() => {
		observer.next('After 1 sec');
	}, 1000);
});

stream$.subscribe(
	(data) => {
		console.log('Data subscribe: ', data);
	},
	(error) => console.log('Error: ', error),
	() => console.log('Finished!')
);
