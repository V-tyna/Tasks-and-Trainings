//---------------------------------------------------------------------------------------------------------------------------
//                                   Comparisons
//---------------------------------------------------------------------------------------------------------------------------

const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationMinutes) {
	function getTwo(str) {
		return str.split(':').map((s) => +s);
	}
	const [hh, mm] = getTwo(startTime);
	const [hhDayStart, mmDayStart] = getTwo(dayStart);
	const [hhDayEnd, mmDayEnd] = getTwo(dayEnd);

	if (
		hh < hhDayStart ||
		(hh === hhDayStart && mm < mmDayStart) ||
		hh > hhDayEnd ||
		(hh === hhDayEnd && mm >= mmDayEnd)
	) {
		return false;
	}

	let hhAfterDuration;
	let mmAfterDuration;

	if (durationMinutes >= 60 || mm + durationMinutes > 60) {
		hhAfterDuration = hh + (durationMinutes - (durationMinutes % 60)) / 60;
		mmAfterDuration = mm + (durationMinutes % 60);
	} else if (mm + durationMinutes === 60) {
		hhAfterDuration = hh + 1;
		mmAfterDuration = 0;
	} else {
		mmAfterDuration = mm + durationMinutes;
		hhAfterDuration = hh;
	}

	if (
		hhAfterDuration > hhDayEnd ||
		(hhAfterDuration === hhDayEnd && mmAfterDuration > mmDayEnd)
	) {
		return false;
	}

	return true;
}

console.log(
	'Schedule meeting: ',
	scheduleMeeting('7:00', 15), // false
	scheduleMeeting('07:15', 30), // false
	scheduleMeeting('7:30', 30), // true
	scheduleMeeting('11:30', 60), // true
	scheduleMeeting('17:00', 45), // true
	scheduleMeeting('17:30', 30), // false
	scheduleMeeting('17:45', 30), // false
	scheduleMeeting('18:00', 15) // false
);

//---------------------------------------------------------------------------------------------------------------------------
//                                   Closures
//---------------------------------------------------------------------------------------------------------------------------

function range(start, end) {
	if (end === undefined) {
		return function (end) {
			return getRange(start, end);
		};
	} else {
		return getRange(start, end);
	}

	function getRange(start, end) {
		const result = [];
		for (let i = start; i <= end; i++) {
			result.push(i);
		}
		return result;
	}
}

console.log(
	'Range with 2 arguments: ',
	range(3, 3), // [3]
	range(3, 8), // [3,4,5,6,7,8]
	range(3, 0) // []
);

const start3 = range(3);
const start4 = range(4);

console.log(
	'Range with 1 arguments: ',
	start3(3), // [3]
	start3(8), // [3,4,5,6,7,8]
	start3(0), // []
	start4(6) // [4,5,6]
);

//---------------------------------------------------------------------------------------------------------------------------
//                                   Prototypes
//---------------------------------------------------------------------------------------------------------------------------

function randMax(max) {
	return Math.trunc(1e9 * Math.random()) % max;
}

const reel = {
	symbols: ['♠', '♥', '♦', '♣', '☺', '★', '☾', '☀'],
	spin() {
		if (this.position == null) {
			this.position = randMax(this.symbols.length - 1);
		}
		this.position =
			(this.position + 100 + randMax(100)) % this.symbols.length;
	},
	display() {
		if (this.position == null) {
			this.position = randMax(this.symbols.length - 1);
		}
		return this.symbols[this.position];
	},
};


const slotMachine = {
	reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
	spin() {
		this.reels.forEach(function spinReel(reel) {
			reel.spin();
		});
	},
	display() {
		const rows = [];

		for (let i = 0; i < this.reels.length; i++) {
			rows.push(
				this.reels
					.map((reel) => {
						return Object.create(reel).display();
					})
					.join(' | ')
			);
		}

		return rows.join('\n');
	},
};

console.log(slotMachine.display());
// ☾ | ☀ | ★
// ☀ | ♠ | ☾
// ♠ | ♥ | ☀

console.log(slotMachine.display());
// ♦ | ♠ | ♣
// ♣ | ♥ | ☺
// ☺ | ♦ | ★
