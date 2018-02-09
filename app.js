'use strict';

// TODO - add input field for each data piece in html
//           - does this mean every square in the table is its own data piece?  probably not
//           - or, are the data pieces the parameters from the constructor?
//      - I should probably figure out what this form is actually supposed to do
//           - now I sort of remember, it's supposed to let Pat add new stores.  So, Pat will
//             add info into the form, and then the form will add that info into the table
//      - returning to issues in first bullet point:
//           - data pieces are the parameters from the constructor.  Now it makes sense.
//             Since the form adds a new row to the table, Pat needs to provide the same info
//             that he provided before, that created it in the first place.



///////////////Constructor/////////////////////////////////////////////////
function CookieStand (minHrlyCust, maxHrlyCust, avgCookiesCust, storeName) {
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.avgCookiesCust = avgCookiesCust;
    this.storeName = storeName;
    this.amntCookiesPurch = [];
}

CookieStand.prototype.calc = function () {
    let min = Math.ceil(this.minHrlyCust);
    let max = Math.floor(this.maxHrlyCust);
    let hrlySale;

    this.amntCookiesPurch.push(this.storeName);

    for (let i = 0; i < 15; i++) {
        hrlySale = Math.floor((Math.floor(Math.random() * (max - min)) + min) * this.avgCookiesCust);
        this.amntCookiesPurch.push(hrlySale);
    }
}

CookieStand.prototype.makeTableHeading = function () {
    const hour = ['Store', '6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total:'];
    for (let i = 0; i < hour.length; i++) {
        const tableTopRow = document.getElementById('tableTopRow');
        const newTh = document.createElement('th');
        newTh.textContent = hour[i];
        tableTopRow.appendChild(newTh);
    }
}

CookieStand.prototype.insertRows = function () {
    let count = 0;
    for (let i = -1; i < 17; i++) {
        const newRow = document.createElement('tr');
        const newTh = document.getElementById('tableTopRow');
        const newTd = document.createElement('td');
        if (i < 0) {
            newTh.appendChild(newRow);              
        } else if (i === 0) {
            newTd.textContent = this.amntCookiesPurch[i];
            newTh.appendChild(newTd);
        } else if (i === 16) {
            newTd.textContent = count;
            newTh.appendChild(newTd);
            console.log(count);
        } else {
            count = count + this.amntCookiesPurch[i];
            newTd.textContent = this.amntCookiesPurch[i];
            newTh.appendChild(newTd);
        }
    }
}

const airportLoc = new CookieStand(23, 65, 6.3, 'Airport');
airportLoc.makeTableHeading();
airportLoc.calc();
airportLoc.insertRows();

const pioneerSqLoc = new CookieStand(3, 24, 1.2, "Pioneer Square");
pioneerSqLoc.calc();
pioneerSqLoc.insertRows();

const powellsLoc = new CookieStand(11, 38, 3.7, 'Powell\'s');
powellsLoc.calc();
powellsLoc.insertRows();

const stJohnsLoc = new CookieStand(20, 38, 2.3, 'St. John\'s');
stJohnsLoc.calc();
stJohnsLoc.insertRows();

const waterfrontLoc = new CookieStand(2, 16, 4.6, 'Waterfront');
waterfrontLoc.calc();
waterfrontLoc.insertRows();

/////////////////////////////////FORM////////////////////////////////////////////////////////

function checkStoreName() {
    //var targetName = e.targetName;
    //console.log('stand-name');
    console.log('listening');
}

const elStoreName = document.getElementById('stand-name');
elStoreName.addEventListener('input', checkStoreName, false);

///////////////////////////////////////////////////////////////////////////////////////
// const newTr = document.createElement('tr');
//     tableTopRow.appendChild(newTr);
//     const rowsToTable = document.querySelectorAll('tr');
//     for (let i = 0; i < rowsToTable.length; i++) {
    //         const newTd = document.createElement('td');
    //         newTd.textContent = this.amntCookiesPurch[i];
    //         rowsToTable[i].appendChild(newTd);
    //     }
    // }
    
//const tableBody = document.querySelector('tbody');
        // const rowsToTable = document.querySelectorAll('tr');
        // for (let i = 0; i < rowsToTable.length; i++) {
            //     rowsToTable[i].appendChild(newTd);
            // }
        //makes 5 tr
        // for (let i = 0; i < 5; i++) {
        //     const newTr = document.createElement('tr');
        //     tableTopRow.appendChild(newTr);
        // }
    
        // // make 15 td under each tr.
        // for (let i = 0; i < 15; i++) {
        //     const newTd = document.createElement('td');
        //     newTr.appendChild(newTd);
        //     newTd.textContent = this.amntCookiesPurch[i];
        // }
        
//const tableIds = ['tableHeading', 'tableAirport', 'tablePiSq', 'tablePowells', 'tableStJohns', 'tableWaterfront'];
//pioneerSqLoc.list();
//airportLoc.list();
//airportLoc.addToArr();


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
// This method was working, then it stopped working (I got undefined when calling airportLoc.calc();
// in console).  Then I added the return, and I got an array when calling the method, but it's not
// working the way it's supposed to.

// DONT NEED
// CookieStand.prototype.addToArr = function ()  {
//     const tableLoc = ['Airport', 'Pioneer Square', 'Powell\'s', 'St. John\'s', 'Waterfront'];
//     for (let i = 0; i < tableLoc.length; i++) {
//         this.amntCookiesPurch.push(tableLoc);
//     }
// }
// ^^^T
// CookieStand.prototype.list = function () {
//     for (let i = 0; i < 15; i++) {
//         const airport = document.getElementById('airport');
//         const newLi = document.createElement('li');
//         newLi.textContent = this.hourOfDay[i] + this.amntCookiesPurch[i];
//         airport.appendChild(newLi);
//     }
// }
        //for (let i = 0; i < this.hourOfDay.length; i++) {
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
//console.log(airportLoc.hourOfDay);
// 
// TODO - Move Pioneer Square line under Airport line.  I think I need to do something with
//        nextSibling and an array, in the second for loop of the calc function.
//      - Create instances of other locations, make sure they look right.
//      - Calculate totals and add to table.