const removeFromArray = function(arr, ...remove) {
    const removeArr = Array.from(remove)
    let newArr = [];
    arr.forEach(item => {
        if (!removeArr.includes(item)) {
                newArr.push(item);
        }
    });
    return newArr
} 
removeFromArray([1, 2, 3, 4], 3, 2)       
// Do not edit below this line
module.exports = removeFromArray;
