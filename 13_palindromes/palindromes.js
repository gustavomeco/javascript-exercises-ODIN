const palindromes = function (str) {
    //transformar em um array de cada letra e verificar com um loop se array.length eh igual array.i e ir diminuindo
    const allowed = ("abcdefghijklmnopqrstuvwxyz0123456789")
    const cleanStr = str.toLowerCase().split('').filter((char) => allowed.includes(char));
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] != cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
