function convertTime(time) {
    var seconds = time % 60;
    var totalMinutes = (time - seconds) / 60;
    var minutes = totalMinutes % 60;
    var hours = (totalMinutes - minutes) / 60;
    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours
    };
}
