'use strict';

const airportLoc = {
    minHrlyCust: 23,
    maxHrlyCust: 65,
    avgCookiesCust: 6.3,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        // for loop not pushing to array.  I don't know why
        for (let i = 0; i < this.hourOfDay.length; i++) {
            this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
        }
        for (let i = 0; i < airportLoc.hourOfDay.length; i++) {
            const newLi = document.createElement('li');
            newLi.textContent = airportLoc.hourOfDay[i] + airportLoc.amntCookiesPurch[i];
            airport.appendChild(newLi);
        }
    },
    amntCookiesPurch: [],
    hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
};
console.log(airportLoc.amntCookiesPurch);
console.log(airportLoc.hourOfDay);

const pioneerSqLoc = {
    minHrlyCust: 3,
    maxHrlyCust: 24,
    avgCookiesCust: 1.2,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        for (let i = 0; i < this.hourOfDay.length; i++) {
            this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
        }
        for(let i = 0; i < pioneerSqLoc.hourOfDay.length; i++) {
            const secondLi = document.createElement('li');
            secondLi.textContent = pioneerSqLoc.hourOfDay[i] + pioneerSqLoc.amntCookiesPurch[i];
            pioneerSq.appendChild(secondLi);
        }
    },
    amntCookiesPurch: [],
    hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
};
console.log(pioneerSqLoc.getRandomNum());
console.log(pioneerSqLoc.amntCookiesPurch);

const powellsLoc = {
    minHrlyCust: 11,
    maxHrlyCust: 38,
    avgCookiesCust: 3.7,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        for (let i = 0; i < this.hourOfDay.length; i++) {
            this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
        }
        for (let i = 0; i < powellsLoc.hourOfDay.length; i++) {
            const thirdLi = document.createElement('li');
            thirdLi.textContent = powellsLoc.hourOfDay[i] + powellsLoc.amntCookiesPurch[i];
            powells.appendChild(thirdLi);
        }
    },
    amntCookiesPurch: [],
    hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
};
console.log(powellsLoc.getRandomNum());
console.log(powellsLoc.amntCookiesPurch);

const stJohnsLoc = {
    minHrlyCust: 20,
    maxHrlyCust: 38,
    avgCookiesCust: 2.3,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        for (let i = 0; i < this.hourOfDay.length; i++) {
            this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
        }
        for (let i = 0; i < stJohnsLoc.hourOfDay.length; i++) {
            const fourthLi = document.createElement('li');
            fourthLi.textContent = stJohnsLoc.hourOfDay[i] + stJohnsLoc.amntCookiesPurch[i];
            stJohns.appendChild(fourthLi);
        }
    },
    amntCookiesPurch: [],
    hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
};
console.log(stJohnsLoc.getRandomNum());
console.log(stJohnsLoc.amntCookiesPurch);

const waterfrontLoc = {
    minHrlyCust: 2,
    maxHrlyCust: 16,
    avgCookiesCust: 4.6,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        for (let i = 0; i < this.hourOfDay.length; i++) {
            this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
        }
        for (let i = 0; i < waterfrontLoc.hourOfDay.length; i++) {
            const fifthLi = document.createElement('li');
            fifthLi.textContent = waterfrontLoc.hourOfDay[i] + waterfrontLoc.amntCookiesPurch[i];
            waterfront.appendChild(fifthLi);
        }
    },
    amntCookiesPurch: [],
    hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
};
console.log(waterfrontLoc.getRandomNum());
console.log(waterfrontLoc.amntCookiesPurch);
