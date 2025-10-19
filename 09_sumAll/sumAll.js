const sumAll = function(num1,num2) {
    let addNum = [];
    let i = 0;
    if ((!Number.isInteger(num1)) ||
        (!Number.isInteger(num2)) ||
        num1 < 0 ||
        num2 < 0) {
        return 'ERROR'
    }else if (num1 > num2) {
        for (num2; num2 <= num1; num2++) {
            addNum[i] = (num2); 
            i++
        }
    } else if (num1 < num2) {
        for (num1; num1 <= num2; num1++) {
            addNum[i] = (num1); 
            i++
        }    
    }
    return addNum.reduce((sum,current) => sum + current,0);
};
// Do not edit below this line
module.exports = sumAll;
