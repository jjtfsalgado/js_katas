function primeFactorDecomposition(num) {
    let result = '';
    var primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }

    var sqrtNum = Math.sqrt(num);
    for (var i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    const primeFactorDuplicates = countDuplicates(primeFactors);
    for (let key in primeFactorDuplicates){
        const values = primeFactorDuplicates[key];
        result += values > 1 ? `(${key}**${values})` : `(${key})`;
    }

    return result;
}

function countDuplicates(arr){
    return arr.reduce((aggregator, value, index, array) => {
        if(!aggregator[value]){
            return aggregator = {...aggregator, [value]: 1};
        }else{
            return aggregator = {...aggregator, [value]:++aggregator[value]};
        }
    }, {})
}

console.log(primeFactorDecomposition(7775460));

