function curryPartial(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    const result = 0;
    // console.log(fn);

    // const f = (ar) => {
    //     ar ?  f(ar) : "result";
    // };

    return (a) => a ? curryPartial(a) : result;
}

function add(x, y, z) {
    return x + y + z;
}

console.log(curryPartial(add)(1)(2)(3)); //6
// curryPartial(add, 0, 1)(2)
// (2)(3); //6