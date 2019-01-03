function curryPartial(fn){
    const parameters = Array.prototype.slice.call(arguments, 1);
    function f(len, args) {
        return (...a) => {
            if((len - (args.length + a.length) < 1) && a.length){
                return fn(...args.concat(a));
            }
            return f(len, args.concat(a));
        }
    }

    return fn.length <= parameters.length ? fn(...parameters) : f(fn.length, parameters);
}

function add(a, b, c) {
    return a + b + c;
}

// console.log(curryPartial(add, 2)(3)(4)); //9
// console.log(curryPartial(add)(2)(3)(4)); //9
// console.log(curryPartial(add, 2, 3)(4)); //9
// console.log(curryPartial(add, 2, 3, 4)); //9


//Code wars url -> https://www.codewars.com/kata/53cf7e37e9876c35a60002c9