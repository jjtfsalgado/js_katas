function body(arg, nr) {
    return typeof arg === "function" ? arg(nr) : nr;
}

function zero() {
    return body(arguments[0], 0);
}
function one() {
    return body(arguments[0], 1);
}

function two() {
    return body(arguments[0], 2);
}

function three() {
    return body(arguments[0], 3);
}

function four() {
    return body(arguments[0], 4);
}

function five() {
    return body(arguments[0], 5);
}

function six() {
    return body(arguments[0], 6);
}

function seven() {
    return body(arguments[0], 7);
}

function eight() {
    return body(arguments[0], 8);
}

function nine() {
    return body(arguments[0], 9);
}

function plus() {
    const arg = arguments[0];
    return (nr) => nr + arg;
}

function minus() {
    const arg = arguments[0];
    return (nr) => nr - arg;
}

function times() {
    const arg = arguments[0];
    return (nr) => nr * arg;
}

function dividedBy() {
    const arg = arguments[0];
    return (nr) => Math.floor(nr/arg);
}


// seven(times(five())); // must return 35
console.log(nine(plus(four()))); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3





















