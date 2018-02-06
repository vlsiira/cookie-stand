'use strict';

const airportLoc = {
    minHrlyCust: 23,
    maxHrlyCust: 65,
    avgCookiesCust: 6.3,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust;
    }
};
console.log(airportLoc.getRandomNum());

const pioneerSqLoc = {
    minHrlyCust: 3,
    maxHrlyCust: 24,
    avgCookiesCust: 1.2,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust;
    }
};
console.log(pioneerSqLoc.getRandomNum());

const powellsLoc = {
    minHrlyCust: 11,
    maxHrlyCust: 38,
    avgCookiesCust: 3.7,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust;
    }
};
console.log(powellsLoc.getRandomNum());

const stJohnsLoc = {
    minHrlyCust: 20,
    maxHrlyCust: 38,
    avgCookiesCust: 2.3,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust;
    }
};
console.log(stJohnsLoc.getRandomNum());

const waterfrontLoc = {
    minHrlyCust: 2,
    maxHrlyCust: 16,
    avgCookiesCust: 4.6,
    getRandomNum: function () {
        this.minHrlyCust = Math.ceil(this.minHrlyCust);
        this.maxHrlyCust = Math.floor(this.maxHrlyCust);
        return Math.floor(Math.random() * (this.maxHrlyCust - this.minHrlyCust + 1)) + this.minHrlyCust;
    }
};
console.log(waterfrontLoc.getRandomNum());

