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

    return fn.length === parameters.length ? fn(...parameters) : f(fn.length, parameters);
}

function add(x, y, z) {
    return x + y + z;
}

console.log(curryPartial(add, 2)(3)(4)); //9
console.log(curryPartial(add)(2)(3)(4)); //9
console.log(curryPartial(add, 2, 3)(4)); //9
console.log(curryPartial(add, 2, 3, 4)); //9