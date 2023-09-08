const currentDay = document.getElementById("currentDayElement");
const currentUTCTime = document.getElementById("currentUTCTimeElement");

function updateCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    currentDay.textContent = currentDayOfWeek;
}


function updateCurrentUTCTime() {
    const currentUTC = new Date().getTime();
    currentUTCTime.textContent = String(currentUTC);
}

updateCurrentDayOfWeek();
updateCurrentUTCTime();

setInterval(updateCurrentUTCTime, 5000);