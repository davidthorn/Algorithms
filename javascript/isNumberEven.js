/**
 * Returns if the number is Event
 * If prev is undefined then the num will be used
 *
 * @param {number} num
 * @param {number} [prev=undefined]
 * @param {boolean} [state=true]
 * @returns {boolean}
 */
function isNumberEven(num, prev, state) {
    if (prev === void 0) { prev = undefined; }
    if (state === void 0) { state = true; }
    return prev === 0 ? state : isNumberEven(num, prev === undefined ? --num : --prev, !state);
}
