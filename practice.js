'use strict';

function checkMouseover() {
    const elMsg = document.getElementById('feedback');
    elMsg.textContent = 'mouse moved over';
}

var elLink = document.getElementById('link');
elLink.onmouseover = checkMouseover;

/////////////////////////////////////////////////////////////

console.log('hello');

function checkClick() {
    const elMsg = document.getElementById('feedback');
    elMsg.textContent = 'has been clicked';
}

var elLink = document.getElementById('link');
elLink.onclick = checkClick;