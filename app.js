'use strict';

function CookieStand (minHrlyCust, maxHrlyCust, avgCookiesCust, storeName) {
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.avgCookiesCust = avgCookiesCust;
    this.storeName = storeName;
    this.amntCookiesPurch = [];
}

const airportLoc = new CookieStand(23, 65, 6.3, 'Airport');
const pioneerSqLoc = new CookieStand(3, 24, 1.2, "Pioneer Square");
const powellsLoc = new CookieStand(11, 38, 3.7, 'Powell\'s');
const stJohnsLoc = new CookieStand(20, 38, 2.3, 'St. John\'s');
const waterfrontLoc = new CookieStand(2, 16, 4.6, 'Waterfront');

CookieStand.prototype.calc = function () {
    let min = Math.ceil(this.minHrlyCust);
    let max = Math.floor(this.maxHrlyCust);
    let hrlySale;

    for (let i = 0; i < 15; i++) {
        hrlySale = Math.floor((Math.floor(Math.random() * (max - min)) + min) * this.avgCookiesCust);
        this.amntCookiesPurch.push(hrlySale);
    }
}

CookieStand.prototype.makeTableHeading = function () {
    const hour = ['Store', '6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total:'];
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    for (let i = 0; i < hour.length; i++) {
        const newTh = document.createElement('th');
        newTh.textContent = hour[i];
        newRow.appendChild(newTh);
    }
    tableBody.appendChild(newRow);
}

CookieStand.prototype.insertRows = function () {
    let count = 0;
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    const newTh = document.createElement('th');
    newTh.textContent = this.storeName;
    newRow.appendChild(newTh);
    for (let i = 0; i < this.amntCookiesPurch.length; i++) {
        const newTd = document.createElement('td');
            newTd.textContent = this.amntCookiesPurch[i];
            newRow.appendChild(newTd);
            count = count + this.amntCookiesPurch[i];
        }
    const totalsTd = document.createElement('td');
    totalsTd.textContent = count;
    newRow.appendChild(totalsTd);
    tableBody.appendChild(newRow);
}

airportLoc.makeTableHeading();
airportLoc.calc();
airportLoc.insertRows();

pioneerSqLoc.calc();
pioneerSqLoc.insertRows();

powellsLoc.calc();
powellsLoc.insertRows();

stJohnsLoc.calc();
stJohnsLoc.insertRows();

waterfrontLoc.calc();
waterfrontLoc.insertRows();
