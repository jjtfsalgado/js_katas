function persistence(num) {
    if(num < 10) return 0;
    num = num.toString().split("").map(Number).reduce((accum, i) => accum*=i,1);
    return 1 + persistence(num);
}

console.log(persistence(999))
