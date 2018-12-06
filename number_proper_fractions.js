function properFractions(n){
    if(n == 1){return 0;}
    var array, x, i;
    if (n === 1 || 0) {
        return n;
    } else {
        array = fatt(n);
        for (i = 0; i < array.length; i++) {
            x = array[i];
            n *= (1 - 1 / x);
        }
        return Math.round(n);
    }
}

function fatt (num) {
    var array = [], i = 2;
    while (num > 1) {
        if (num % i === 0) {
            if (array.indexOf(i) < 0) array.push(i);
            num = num / i;
            i = 2;
        } else  i++;
    }
    return array;
}

//Examples
// properFractions(1)==0
// properFractions(2)==1
// properFractions(5)==4
// properFractions(15)==8
// properFractions(25)==20


//Code wars url -> https://www.codewars.com/kata/number-of-proper-fractions-with-denominator-d/train/javascript