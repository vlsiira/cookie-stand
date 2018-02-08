'use strict';

// const airportLoc = {
//     minHrlyCust: 23,
//     maxHrlyCust: 65,
//     avgCookiesCust: 6.3,
//     getRandomNum: function () {
//         this.minHrlyCust = Math.ceil(this.minHrlyCust);
//         this.maxHrlyCust = Math.floor(this.maxHrlyCust);
//         for (let i = 0; i < this.hourOfDay.length; i++) {
//             this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
//         }
//         for (let i = 0; i < airportLoc.hourOfDay.length; i++) {
//             const airport = document.getElementById('airport');
//             const newLi = document.createElement('li');
//             newLi.textContent = airportLoc.hourOfDay[i] + airportLoc.amntCookiesPurch[i];
//             airport.appendChild(newLi);
//         }
//     },
//     amntCookiesPurch: [],
//     hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
// };
// airportLoc.getRandomNum();
// console.log(airportLoc.amntCookiesPurch);
// console.log(airportLoc.hourOfDay);

///////////////Constructor/////////////////////////////////////////////////

function CookieStand (minHrlyCust, maxHrlyCust, avgCookiesCust) {
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.avgCookiesCust = avgCookiesCust;
    this.amntCookiesPurch = [];
    this.hourOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
}

// This method was working, then it stopped working (I got undefined when calling airportLoc.calc();
// in console).  Then I added line the return, and I got an array when calling the method, but it's not
// working the way it's supposed to.

// ^^^TODO push random customer number * avg cookie number into amount cookies array
CookieStand.prototype.calc = function () {
    let min = Math.ceil(this.minHrlyCust);
    let max = Math.floor(this.maxHrlyCust);
    let hrlySale;

    this.amntCookiesPurch.push('Airport');
    
    //for (let i = 0; i < this.hourOfDay.length; i++) {
        for (let i = 0; i < 15; i++) {
            hrlySale = Math.floor((Math.floor(Math.random() * (max - min)) + min) * this.avgCookiesCust);
            this.amntCookiesPurch.push(hrlySale); 
        }
        const hour = ['', '6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
        for (let i = 0; i < hour.length; i++) {
            const tableBody = document.querySelector('tbody');
            const newTd = document.createElement('td');
            newTd.textContent = this.amntCookiesPurch[i];
            tableBody.appendChild(newTd);
         }
        for (let i = 0; i < hour.length; i++) {
            const tableTopRow = document.getElementById('tableTopRow');
            const newTh = document.createElement('th');
            newTh.textContent = hour[i];
            tableTopRow.appendChild(newTh);
        }
}

CookieStand.prototype.list = function () {
    for (let i = 0; i < 15; i++) {
        const airport = document.getElementById('airport');
        const newLi = document.createElement('li');
        newLi.textContent = this.hourOfDay[i] + this.amntCookiesPurch[i];
        airport.appendChild(newLi);
    }
}

// ^^^TODO make the above info appear in list form

const airportLoc = new CookieStand(23, 65, 6.3);
airportLoc.calc();
airportLoc.list();

///////////////////////////////////////////////////////////////////////////////////////


//const tableIds = ['tableHeading', 'tableAirport', 'tablePiSq', 'tablePowells', 'tableStJohns', 'tableWaterfront'];
const tableLoc = ['Airport', 'Pioneer Square', 'Powell\'s', 'St. John\'s', 'Waterfront'];


// for (let i = 0; i < hour.length; i++) {
//     const tableBody = document.querySelector('tbody');
//     const newTd = document.createElement('td');
//     newTd.textContent = this.amntCookiesPurch[i];
//     tableBody.appendChild(newTd);
// }



// for (let i = 0; i < hour.length; i++) {
//     const tableRows = getElementsByTagName('tr');
//     const newTh = document.createElement('th');
//     newTh.textContent = tableLoc[i];
//     tableRows.appendChild(newTh);
// }

// TODO create table
//       -times in array              -this.hourOfDay
//       -loop through array
//       -use getElement
//       -make data display in table

// TODO create new instances of CookieStand for other stores

// TODO calculate totals for each store

// const pioneerSqLoc = {
//     minHrlyCust: 3,
//     maxHrlyCust: 24,
//     avgCookiesCust: 1.2,
//     getRandomNum: function () {
//         this.minHrlyCust = Math.ceil(this.minHrlyCust);
//         this.maxHrlyCust = Math.floor(this.maxHrlyCust);
//         for (let i = 0; i < this.hourOfDay.length; i++) {
//             this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
//         }
//         for(let i = 0; i < pioneerSqLoc.hourOfDay.length; i++) {
//             const pioneerSq = document.getElementById('pioneerSq');
//             const secondLi = document.createElement('li');
//             secondLi.textContent = pioneerSqLoc.hourOfDay[i] + pioneerSqLoc.amntCookiesPurch[i];
//             pioneerSq.appendChild(secondLi);
//         }
//     },
//     amntCookiesPurch: [],
//     hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
// };
// pioneerSqLoc.getRandomNum();
// console.log(pioneerSqLoc.amntCookiesPurch);

// const powellsLoc = {
//     minHrlyCust: 11,
//     maxHrlyCust: 38,
//     avgCookiesCust: 3.7,
//     getRandomNum: function () {
//         this.minHrlyCust = Math.ceil(this.minHrlyCust);
//         this.maxHrlyCust = Math.floor(this.maxHrlyCust);
//         for (let i = 0; i < this.hourOfDay.length; i++) {
//             this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
//         }
//         for (let i = 0; i < powellsLoc.hourOfDay.length; i++) {
//             const powells = document.getElementById('powells');
//             const thirdLi = document.createElement('li');
//             thirdLi.textContent = powellsLoc.hourOfDay[i] + powellsLoc.amntCookiesPurch[i];
//             powells.appendChild(thirdLi);
//         }
//     },
//     amntCookiesPurch: [],
//     hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
// };
// powellsLoc.getRandomNum();
// console.log(powellsLoc.amntCookiesPurch);

// const stJohnsLoc = {
//     minHrlyCust: 20,
//     maxHrlyCust: 38,
//     avgCookiesCust: 2.3,
//     getRandomNum: function () {
//         this.minHrlyCust = Math.ceil(this.minHrlyCust);
//         this.maxHrlyCust = Math.floor(this.maxHrlyCust);
//         for (let i = 0; i < this.hourOfDay.length; i++) {
//             this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
//         }
//         for (let i = 0; i < stJohnsLoc.hourOfDay.length; i++) {
//             const stJohns = document.getElementById('stJohns');
//             const fourthLi = document.createElement('li');
//             fourthLi.textContent = stJohnsLoc.hourOfDay[i] + stJohnsLoc.amntCookiesPurch[i];
//             stJohns.appendChild(fourthLi);
//         }
//     },
//     amntCookiesPurch: [],
//     hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
// };
// stJohnsLoc.getRandomNum();
// console.log(stJohnsLoc.amntCookiesPurch);

// const waterfrontLoc = {
//     minHrlyCust: 2,
//     maxHrlyCust: 16,
//     avgCookiesCust: 4.6,
//     getRandomNum: function () {
//         this.minHrlyCust = Math.ceil(this.minHrlyCust);
//         this.maxHrlyCust = Math.floor(this.maxHrlyCust);
//         for (let i = 0; i < this.hourOfDay.length; i++) {
//             this.amntCookiesPurch.push((Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust) * Math.round(this.avgCookiesCust));
//         }
//         for (let i = 0; i < waterfrontLoc.hourOfDay.length; i++) {
//             const waterfront = document.getElementById('waterfront');
//             const fifthLi = document.createElement('li');
//             fifthLi.textContent = waterfrontLoc.hourOfDay[i] + waterfrontLoc.amntCookiesPurch[i];
//             waterfront.appendChild(fifthLi);
//         }
//     },
//     amntCookiesPurch: [],
//     hourOfDay: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ']
// };
// waterfrontLoc.getRandomNum();
// console.log(waterfrontLoc.amntCookiesPurch);

// //##################### Practice #####################################################################

// // object literal- this worked

// // const basket = {
// //     name: 'gift basket',
// //     apples: 6,
// //     bananas: 3,
// //     log: function () {
// //         console.log(this.name);
// //     },
// //     addFruit: function () {
// //         return this.apples + this.bananas;
// //     }
// // };

// // basket.log();
// // basket.addFruit();

////////////////////Lines I might want later///////////////////////////////////////////////
// console.log(airportLoc.calc());
//CookieStand.amntCookiesPurch = [];
//console.log(CookieStand.amntCookiesPurch);
//const hourOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
        //this.amntCookiesPurch.push((Math.floor(Math.random() * (max - min + 1)) + min) * Math.round(this.avgCookiesCust));
///