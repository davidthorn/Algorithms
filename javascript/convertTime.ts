type StopWatchHandle = number | undefined

interface StopWatch {

    /**
     * The time format representing the total number of seconds, minutes, hours
     * which have either passed if not a timer or are remaining if is a timer
     *
     * @type {TimeFormat}
     * @memberof StopWatch
     */
    time: TimeFormat

    /**
     * Indicating the total number of seconds either remaining or which have passed
     *
     * @type {number}
     * @memberof StopWatch
     */
    totalSeconds: number

    /**
     * If isTimer is true then it will count down from the
     * total number of seconds
     *
     * If isTimer is false then it will count the number of seconds which has
     * passed since starting and display in a hours:minutes:seconds format
     * 
     * @type {boolean}
     * @memberof StopWatch
     */
    isTimer: boolean 

    /**
     * Indicates if the stop watch | timer is runnnning
     *
     * @type {boolean}
     * @memberof StopWatch
     */
    isRunning: boolean

    /**
     * The handle provided by the interval manager
     * This handle will be used to stop the interval when isRunning as been set to false
     *
     * @type {StopWatch | undefined}
     * @memberof StopWatch
     */
    handle?: StopWatchHandle

    /**
     * Should set the isTimer property to true
     * and set the time property to hold the time value
     * The timer should then start
     * Once the timer has started the handle property must have a StopWatchHandle set
     * 
     * This method will throw an error if the stop watch is already running
     * 
     * @param {TimeFormat} time
     * @returns {StopWatchHandle}
     * @memberof StopWatch
     */
    startTimer(time: TimeFormat): StopWatchHandle

    /**
     * Should stop the timer from running
     * Sets the isRunning to false
     * and stops the interval which is running
     * Method then returns the time format which will indicate how much time is remaining
     *
     * This method will throw an error if the stop watch is not running
     * 
     * 
     * @returns {TimeFormat}
     * @memberof StopWatch
     */
    stopTimer(): TimeFormat

    /**
     * Converts the total number of seconds provided into a TimeFormat
     * Indicating how many seconds, minutes and hours this time in seconds is
     *
     * @param {number} totalSeconds
     * @returns {TimeFormat}
     * @memberof StopWatch
     */
    convertSecondsToTimeFormat(totalSeconds: number ): TimeFormat

    /**
     * Starts the stop watch counting down from the date in the future
     * This method uses the timer once again it just calculates how many total seconds
     * that there are between the current time and the future time.
     * 
     * This method will throw an error if the stop watch is already running
     *
     * @param {Date} dateInFuture
     * @returns {StopWatch} StopWatch
     * @memberof StopWatch
     */
    countDownFromDate(dateInFuture: Date): StopWatchHandle

    /**
     * Calculates the total number of seconds in this time format
     * This method will throw and error if either of the time format values are negative
     *
     * @param {TimeFormat} timeFormat
     * @returns {number} number
     * @memberof StopWatch
     */
    getTotalSecondsOfTimeFormat(timeFormat: TimeFormat): number
}

type TimeFormat = {

    /**
     * Seconds between 0 and 60 for this time
     *
     * @type {number}
     */
    seconds: number

    /**
     * Minutes between 0 and 6 for this time
     *
     * @type {number}
     */
    minutes: number

    /**
     * Number of total hours from 0 to infinity
     *
     * @type {number}
     */
    hours: number
}

/**
 * Converts the time in seconds to a TimeFormat type
 * If the isSeconds is false then it is assumed that they
 * are milliseconds and then converted to seconds
 *
 * @param {number} time
 * @param {boolean} [isSeconds=true]
 * @returns {TimeFormat}
 */
function convertTime(time: number, isSeconds: boolean = true): TimeFormat {
    time  = !time ? time / 1000 : time
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
