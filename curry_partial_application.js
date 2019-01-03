function curry(fn) {
    function nest(N, args) {
        return (...xs) => {
            if (N - xs.length <= 0) {
                return fn(...args, ...xs);
            }
            return nest(N - xs.length, [...args, ...xs]);
        };
    }
    return nest(fn.length, []);
}



function curryPartial(fn){
    const parameters = Array.prototype.slice.call(arguments, 1);
    function f(len, args) {
        return (...a) => {
            if(len - args.length <= 1){
                return fn(...a, ...args);
            }
            return f(len - args.length, [...a, ...args]);
        }
    }
    return f(fn.length, parameters);
}

function add(x, y, z) {
    return x + y + z;
}

console.log(curryPartial(add, 2)(3)(4)); //9
console.log(curryPartial(add)(2)(3)(4)); //9
console.log(curryPartial(add, 2, 3)(4)); //9