const repeatString = function(str,num) {
    const str1 = str
    for (let i = 1; i < num ; i++) {
        str = str + str1;
    }   
    const test = num == 0 ? '' : num < 0 ? 'ERROR' : str ;
    return test
};
repeatString('hey', 3) // returns 'heyheyhey'
// Do not edit below this line
module.exports = repeatString;
