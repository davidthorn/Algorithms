type TimeFormat = {
    seconds: number
    minutes: number
    hours: number
}

function convertTime(time: number): TimeFormat {
    let seconds = time % 60
    let totalMinutes = (time - seconds) / 60
    let minutes = totalMinutes % 60
    let hours = (totalMinutes - minutes) / 60
    return {
        seconds,
        minutes,
        hours
    }
}
