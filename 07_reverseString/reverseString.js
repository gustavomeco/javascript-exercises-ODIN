const reverseString = function(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str.at(i)
    }
    return reverseStr
};
reverseString('hello there') // returns 'ereht olleh'
// Do not edit below this line
module.exports = reverseString;
