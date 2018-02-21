'use strict';

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
        const tableBody = document.getElementById('tableBody');
        const newTh = document.createElement('th');
        newTh.textContent = hour[i];
        tableBody.appendChild(newTh);
    }
}

CookieStand.prototype.insertRows = function () {
    let count = 0;
    for (let i = -1; i < 17; i++) {
        const newRow = document.createElement('tr');
        const newTh = document.getElementById('tableBody');
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
