const fibonacci = function(num) {
    //vamos fazer um for ate o numero escolhido e criar uma conta dentro que adiciona numeros de forma fibonacci ate o numero escolhido
    let x = 0;
    let z = 0;
    let y = 1;
    if (num < 0) return ("OOPS");
    if (num == 1) return (y);
    for (let i = 1; i < num; i++) {
        z = x + y;
        x = y;
        y = z;
    }
    return z;
};

// Do not edit below this line
module.exports = fibonacci;
