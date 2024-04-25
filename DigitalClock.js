const day = document.getElementById("date");
const h = document.getElementById("hour");
const m = document.getElementById("minutes");
const s = document.getElementById("seconds");
const a = document.getElementById("small");
let digital = setInterval(clock, 1000);
function clock() {
    let today = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    day.innerHTML = `${days[today.getDay()]} , ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let temp = hour <= 11 ? "AM" : "PM";
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    h.innerHTML = `${hour}`;
    m.innerHTML = `${minutes}`;
    s.innerHTML = `${seconds}`;
    a.innerHTML = `${temp}`;
}