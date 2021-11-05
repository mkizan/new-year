const newYears = "1 Jan 2022";

const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

function countdown() {

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
 
    const totalSeconds = Math.floor((newYearsDate - currentDate) / 1000);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = totalSeconds % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

countdown();

setInterval(countdown, 1000);

function formatTime(time) {
    if(time > 9) { 
        time;
    }else {
       `0${time}`;
    }
}
