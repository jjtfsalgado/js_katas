function productFib(prod){



}

function fib(n) {

    const result = [0, 1];
    for (var i = 2; i < n; i++) {
        const current = result[i-2] + result[i-1];
        const previous = result[i-1];
        console.log(current, previous);

        if(current * previous >= n){
            return [previous,current, true];
        }
        result.push(current);
    }


    return result; // or result[n-1] if you want to get the nth term

}

console.log(fib(5895));


// Test.assertSimilar(productFib(4895), [55, 89, true])
// Test.assertSimilar(productFib(5895), [89, 144, false])
// Test.assertSimilar(productFib(74049690), [6765, 10946, true])
// Test.assertSimilar(productFib(84049690), [10946, 17711, false])
// Test.assertSimilar(productFib(193864606), [10946, 17711, true])
// Test.assertSimilar(productFib(447577), [610, 987, false])
// Test.assertSimilar(productFib(602070), [610, 987, true])
