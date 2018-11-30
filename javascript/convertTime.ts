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
    let handle = setInterval(_ => {
        if (totalSeconds > 0) {
        let time = convertTime(--totalSeconds)
            console.log(time)
        } else {
            clearInterval(handle)
        }
        
    
    }, 1000)
}

function startCountDownToTime(min: number, hour: number, day: number, month: number, year: number) {
    let now = new Date()
    now.setUTCMinutes(min)
    now.setUTCHours(hour)
    now.setUTCFullYear(year , month, day)
    let offset = now.getTimezoneOffset() * 60 * 1000
    let d = convertTime(Math.ceil((now.getTime() -  (new Date().getTime()) + offset) / 1000)) 
    console.log(d)
    startStopWatch(d.seconds, d.minutes, d.hours)
}
