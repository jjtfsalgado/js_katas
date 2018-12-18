function curryPartial(fn) {
    const results = [];

    return function f(a){
        results.push(a);
        console.log(arguments)

        return (b) => f(b)
    };
}


function add(x, y, z) {
    return x + y + z;
}


curryPartial(add)(2)(3)(4)(5)(6)(7)(8); //6
// curryPartial(add, 0, 1)(2)
// (2)(3); //6