function chooseBestSum(t, k, ls) {
    let result = 0;

    if(ls.length < k){
        return null;
    }

    ls.sort();

    for (let i = ls.length - 1; i > 0; i--) {
        const v = ls[i];
        if((+result + v) > t){
            console.log(result)
            return result;
        }
        result += v
    }
}

ts = [50, 55, 56, 57, 58];
chooseBestSum(163, 3, ts);



// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
//
// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)
//
// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228