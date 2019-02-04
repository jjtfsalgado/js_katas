function iterPi(epsilon) {
    const piJs = Math.PI;
    var v = 0;
    var it = 0;
    for (var j,i = 1; i <= 10000000; ++j,i += 4) {
        v +=  1 / i - 1 / (i + 2);
        var pi = v * 4

        if(Math.abs(piJs - pi) < epsilon){
            return [j*2, +(pi).toFixed(10)]
        }
    }
};

console.log(iterPi(0.001))