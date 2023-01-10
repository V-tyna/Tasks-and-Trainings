function createSubscription(operatorName) {
	return {
		next: (x) => console.log(operatorName + ': ', x),
		error: (error) => console.log(operatorName + ': ', error),
		complete: () => console.log(operatorName + ': completed'),
	};
}

// ************************ SUBJECTS *************************

const asyncSubject$ = new rxjs.AsyncSubject();
asyncSubject$.next(3);
asyncSubject$.next(4);
asyncSubject$.next(5);
asyncSubject$.subscribe(createSubscription('Async subject'));
asyncSubject$.complete(); // Takes only last value and MUST be COMPLETED

const replaySubject$ = new rxjs.ReplaySubject(2); // buffer 3 values for new subscribers
replaySubject$.subscribe(x => console.log('Replay subject: ', x)); // 1, 2, 3, 4, 5
replaySubject$.next(1); 
replaySubject$.next(2); 
replaySubject$.next(3); 
replaySubject$.next(4);
replaySubject$.subscribe(x => console.log('Replay subject new subscriber: ', x)); // 3, 4, 5
replaySubject$.next(5);  

const behaviorSubject$ = new rxjs.BehaviorSubject(5); // Initial value is 5
behaviorSubject$.subscribe(createSubscription('Behavior subject'));
behaviorSubject$.next('value 6');
behaviorSubject$.next('value 7');

const subject$ = new rxjs.Subject();
subject$.subscribe(createSubscription('subject'));
subject$.next(1);
subject$.next(2);
setTimeout(() => {
  subject$.next(3);
  subject$.complete();
}, 500);

// ************************ ERROR HANDLING OPERATORS *************************

const source = rxjs.interval(1000);
const result = source.pipe(
  rxjs.mergeMap(val => val > 3 ? rxjs.throwError(() => 'Error!') : rxjs.of(val)),
  rxjs.retry(2) // retry 2 times on error
);
 
result.subscribe({
  next: value => console.log(value),
  error: err => console.log(`${ err }: Retried 2 times then quit!`)
});

rxjs.throwError(new Error('Some error.')).subscribe(x => console.log(x));

rxjs.of(1, 2, 3, 4, 5)
  .pipe(
    rxjs.map(n => {
      if (n === 4) {
        throw 'Error four!';
      }
      return n;
    }),
    rxjs.catchError(err => rxjs.throwError(err))
  )
  .subscribe(x => console.log(x)); // uncaught error
  //.subscribe(createSubscription('catchError')); // caught error

// ************************ JOIN OPERATORS *************************

const stream7$ = rxjs.of('Hello', 'between', 'something');
const stream8$ = rxjs.of('World', 'another', 'other');

rxjs.zip(stream7$, stream8$).subscribe(createSubscription('zip'));

rxjs.range(1, 10)
  .pipe(rxjs.concatMap((x, i)=> {
    return rxjs.interval(100)
      .pipe(rxjs.take(x), rxjs.map(q => i))
  }))
  .subscribe(createSubscription('concatMap'));

const promiseCreator = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data + ' Thanks.');
    }, 2000);
  });
}

rxjs.of('This is special data.')
  .pipe(rxjs.mergeMap(x => promiseCreator(x)))
  .subscribe(createSubscription('mergeMap (promise)'));

rxjs.of('Hello', 'hi', 'aloha')
	.pipe(rxjs.mergeMap((x) => rxjs.of(x + ' world!')))
	.subscribe(createSubscription('mergeMap'));

rxjs.range(1, 3) // 3 is quantity of streams
  .pipe(
    rxjs.map(x => rxjs.range(x, 3)),
    rxjs.concatAll()
  )
  .subscribe(createSubscription('concatAll'));

const stream5$ = rxjs.from([1, 2, 3]);
const stream6$ = rxjs.from([4, 5, 6]);

rxjs.concat(stream5$, stream6$)
  .subscribe(createSubscription('concat'));

rxjs.range(1, 2) // 2 is quantity of streams
  .pipe(
    rxjs.map(x => rxjs.of('hello')),
    rxjs.mergeAll()
  )
  .subscribe(createSubscription('mergeAll'));

const stream3$ = rxjs.interval(1000).pipe(rxjs.map(x => 'Stream 3: ' + x));
const stream4$ = rxjs.interval(300).pipe(rxjs.map(x => 'Stream 4: ' + x));

rxjs.merge(stream3$, stream4$)
  .pipe(rxjs.take(12))
  .subscribe(createSubscription('merge (asynchronous)'));

const stream1$ = rxjs.of('hello');
const stream2$ = rxjs.of('world');

rxjs.merge(stream1$, stream2$).subscribe(createSubscription('merge'));

// ************************ UTILS OPERATORS *************************

rxjs.of(1)
  .pipe(
    rxjs.timestamp(),
    rxjs.map(x => ({value: x.value, data: new Date(x.timestamp)}))
  )
  .subscribe(createSubscription('timestamp'));

rxjs.of(Math.random()).pipe(
  rxjs.tap(console.log),
  rxjs.map(n => n > 0.5 ? 'big' : 'small')
).subscribe(createSubscription('tap'));

rxjs.from([6, 2, 8, 4, 88])
  .pipe(rxjs.every(x => x % 2 === 0))
  .subscribe(createSubscription('every'));

rxjs.of()
  .pipe(rxjs.defaultIfEmpty('Here is default value if stream is empty'))
  .subscribe(createSubscription('default'));

// ************************ BUFFERS OPERATORS *************************

rxjs.range(0, 40)
  .pipe(rxjs.bufferCount(5, 10)) // 5 elements in array for each 10 value in range
  .subscribe(createSubscription('bufferCount'));

const clicks = rxjs.fromEvent(document, 'click');
const intervalEvents = rxjs.interval(1000);
const buffered = intervalEvents.pipe(rxjs.buffer(clicks)); // will collect number of seconds between clicks
buffered
	.pipe(rxjs.map((x) => x.length + ' seconds passed after last click.'))
	.subscribe(createSubscription('buffer'));

rxjs.interval(500)
 .pipe(rxjs.buffer(rxjs.interval(3000)), rxjs.take(3))
 .subscribe(createSubscription('buffer'));

// ************************ FILTERING OPERATORS *************************

const cars = [
	{ name: 'audi', price: 500 },
	{ name: 'bmw', price: 400 },
	{ name: 'ford', price: 300 },
	{ name: 'mercedes', price: 400 },
];

// use filter()
rxjs.fromEvent(document.getElementById('car'), 'keyup')
  .pipe(rxjs.map(e => e.target.value))
  .subscribe(data => {
    rxjs.from(cars)
      .pipe(rxjs.filter(car => car.name === data))
      .subscribe(foundCar => {
        document.querySelector('.filteredCar')
          .innerHTML = `<h3>${foundCar.name.toUpperCase()}: ${foundCar.price}</h3>`;
      })
  });

rxjs.fromEvent(document.getElementById('car'), 'keyup')
	.pipe(
		rxjs.map((e) => e.target.value),
		rxjs.debounceTime(300),
		rxjs.distinct()
	)
	.subscribe((data) => {
		console.log(data);
		const container = document.querySelector('.filteredCar');
		container.innerHTML = '';
		cars.forEach((car) => {
			if (data && car.name.includes(data)) {
				const carDiv = document.createElement('div');
				carDiv.innerHTML = `<h3>${car.name.toUpperCase()}: ${
					car.price
				}</h3>`;
				container.append(carDiv);
			}
		});
	});

rxjs.range(0, 10)
  .pipe(rxjs.filter((x)=> x % 2 === 0))
  .subscribe(createSubscription('filter'));

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
		}, ms);
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
