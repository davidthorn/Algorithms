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

function startStopWatch(seconds: number, minutes: number, hours: number) {
    let totalSeconds = (((hours * 60) + minutes) * 60) + seconds
    setInterval(_ => {
        let time = convertTime(--totalSeconds)
        console.log(time)
    
    }, 1000)
}

