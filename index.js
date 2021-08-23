import colors from './db/colors.js';
import { randomIntegerFromInterval } from './js/randomIntegerFromInterval.js';
import refs from './js/refs.js';

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let timerId = null;

function onStartBtnClick({ target }) {
    target.disabled = true;
    changeBgColorOnBodyWithInterval();
}

function onStopBtnClick() {
    refs.startBtn.disabled = false;
    clearTimeout(timerId);
}

function changeBgColorOnBodyWithInterval() {
    setTimeout(function setRandomBgColorOnBody() {
        document.body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];

        timerId = setTimeout(setRandomBgColorOnBody, 1000);
    }, 0);
}
