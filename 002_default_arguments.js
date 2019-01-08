
function add(a,b) { return a+b;};

function defaultArguments(func, params) {

    this.func = func;
    this.parameters = Object.values(params);

    return (...args) => {
        return this.func.apply(null,args)
    }
}

let add_ = defaultArguments(add,{b:9});
console.log(add_(10,2)); // returns 19
console.log(add_(10,7)); // returns 17
console.log(add_()); // returns NaN

// add_ = defaultArguments(add_,{b:3, a:2});
// add_(10); // returns 13 now
// add_(); // returns 5
