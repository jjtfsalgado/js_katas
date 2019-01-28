function iterPi(epsilon) {
    const piJs = Math.PI;
    var v = 0;
    let iter = 0;
    for (i = 1; i <= 10000000000; i += 4) {  // increment by 4
        v +=  1 / i - 1 / (i + 2); // add the value of the series
        const piCalc = v * 4;
        ++iter

        if(Math.abs(piJs - piCalc) < epsilon){
            return [iter * 2, +(piCalc).toFixed(10)]
        }
    }
};