function chooseBestSum(t, k, ls) {

    let sum = null;



    // for (let j = 0; j < ls.length; j++) {
    //
    //     if((j + k - 1) > ls.length){
    //         continue
    //     }
    //
    //     const subArr = ls.slice(j, j + k - 1);
    //
    //     for (let i = 0; i < ls.length; i++) {
    //         const l = ls[i];
    //
    //         if(subArr.includes(l)){
    //             continue;
    //         }
    //
    //         const arr = subArr.concat(l);
    //         const s = sumArr(arr);
    //
    //         if(s > sum && s <= t ){
    //             sum = s
    //         };
    //     }
    // }

    console.log(sum, t, k , ls);

    return sum;
}

function sumArr(arr){
    return arr.reduce((accum, value) => accum += value, 0)
}

ts = [ 91, 74, 73, 85, 73, 81, 87 ];


const combine = function(a, min) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < a.length; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}


console.log(combine(ts, 1));

console.log(chooseBestSum(331, 4, ts));
