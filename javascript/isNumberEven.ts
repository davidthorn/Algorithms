/**
 * Returns if the number is Event
 * If prev is undefined then the num will be used 
 *
 * @param {number} num
 * @param {number} [prev=undefined]
 * @param {boolean} [state=true]
 * @returns {boolean}
 */
function isNumberEven(num: number, prev: number = undefined , state: boolean = true): boolean {
    return prev === 0 ? state : isNumberEven(num , prev === undefined ? --num : --prev , !state)
}
