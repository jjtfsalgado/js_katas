// const array = [ 100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ]
// 1530 1
// It should work for random tests too - Expected: 500, instead got: 776

// const array = [50, 55, 57, 58, 60]

const array = [ 100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ];

function chooseBestSum(t, k, ls){
    if(ls.length < k) return null;

    const combs = [];
    let result = null;

    loop([], 0, combs, k, ls);

    combs.forEach(i => {
        const s = sum(i);

        if(s <= t && s > result){
            result = s;
        }
    });

    console.log(combs, result);

    return result
}


function loop(comb, start, combs, k , ls) {
    console.log(comb);

    for (let i = start; i < ls.length; i++) {
        const c = comb.concat(ls[i]);
        c.length < k ? loop(c, i + 1, combs, k , ls) : combs.push(c);
    }
}

function sum(arr){
    return arr.reduce((accum, value) => accum += value,0)
}

chooseBestSum(3670, 17, array);




