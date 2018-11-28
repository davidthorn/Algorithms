/**
 * Returns if the number is Event
 *
 * @param {number} num
 * @returns {boolean}
 */
function isNumberEven(num) {
    var isEven = true;
    /// The number is even in the beginning therefore 
    /// everytime we iterate through the number we will negate isEven 
    for (var x = 0; x < num; x++) {
        isEven = !isEven;
    }
    return isEven;
}
