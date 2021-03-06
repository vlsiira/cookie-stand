
'use strict';

const hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

function CookieStand (minHrlyCust, maxHrlyCust, avgCookiesCust, storeName) {
    this.minHrlyCust = minHrlyCust;
    this.maxHrlyCust = maxHrlyCust;
    this.avgCookiesCust = avgCookiesCust;
    this.storeName = storeName;
    this.amntCookiesPurch = [];
}

CookieStand.prototype.calc = function () {
    const min = this.minHrlyCust;
    const max = this.maxHrlyCust;
    for (let i = 0; i < hours.length; i++) {
        let hrlySale = Math.floor(((Math.random() * (max - min)) + min) * this.avgCookiesCust);
        this.amntCookiesPurch.push(hrlySale);
    }
}

CookieStand.prototype.makeTableHeading = function () {
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    const storeHeading = document.createElement('th');
    storeHeading.textContent = 'Store';
    newRow.appendChild(storeHeading);
    const totalHeading = document.createElement('th');
    totalHeading.textContent = 'Totals';
    for (let i = 0; i < hours.length; i++) {
        const newTh = document.createElement('th');
        newTh.textContent = hours[i];
        newRow.appendChild(newTh);
    }
    newRow.appendChild(totalHeading);
    tableBody.appendChild(newRow);
}

CookieStand.prototype.insertRows = function () {
    let totals = 0;
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr');
    const newTh = document.createElement('th');
    newTh.textContent = this.storeName;
    newRow.appendChild(newTh);
    for (let i = 0; i < this.amntCookiesPurch.length; i++) {
        const newTd = document.createElement('td');
        newTd.textContent = this.amntCookiesPurch[i];
        newRow.appendChild(newTd);
        totals += this.amntCookiesPurch[i];
    }
    const totalsTd = document.createElement('td');
    totalsTd.textContent = totals;
    newRow.appendChild(totalsTd);
    tableBody.appendChild(newRow);
}

function addStore(inputField) {
    const standName = inputField.form.elements['stand-name'].value;
    const minimumHourlyCustomers = inputField.form.elements['minimum-hourly-customers'].value;
    const maximumHourlyCustomers = inputField.form.elements['maximum-hourly-customers'].value;
    const averageCookiesCustomer = inputField.form.elements['average-cookies-per-customer'].value;
    const newStore = new CookieStand(minimumHourlyCustomers, maximumHourlyCustomers, averageCookiesCustomer, standName);
    newStore.calc();
    newStore.insertRows();
}

const airportLoc = new CookieStand(23, 65, 6.3, 'Airport');
const pioneerSqLoc = new CookieStand(3, 24, 1.2, 'Pioneer Square');
const powellsLoc = new CookieStand(11, 38, 3.7, 'Powell\'s');
const stJohnsLoc = new CookieStand(20, 38, 2.3, 'St. John\'s');
const waterfrontLoc = new CookieStand(2, 16, 4.6, 'Waterfront');

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
