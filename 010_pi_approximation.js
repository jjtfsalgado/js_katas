function iterPi(epsilon) {
    const piJs = Math.PI;
    let pi = 0, iter = 0, negPos =1;
    while(Math.abs(piJs - (pi * 4)) >= epsilon){
        pi += negPos/(iter * 2 + 1);
        ++iter;
        negPos *= -1;
    }
    return [iter, +(pi * 4).toFixed(10)]
};

console.log(iterPi(0.001));