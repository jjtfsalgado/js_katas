
function add(a,b) { return a+b;};

function defaultArguments(func, params) {

}

const add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN