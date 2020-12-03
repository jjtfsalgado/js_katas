function persistence(num, count = 0) {
    if(num < 10) return count;
    num = num.toString().split("").map(Number).reduce((accum, i) => accum*=i,1);
    return persistence(num, ++count);
}

console.log(persistence(999))
