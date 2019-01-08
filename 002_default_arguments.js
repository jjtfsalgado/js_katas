

var timesFive = function () {
    var five = 5;
    return function (a) {
        return five * x;
    };
}();

var x = 1;

function defaultArguments(func, params) {
    // console.log(func);
    if(func.prototype) {
        this.parameters = {};
        this.func = func;
        const capture = func.toString().match(/\((...*)\)/);

        if (capture) {
            const parameters = capture[1].split(',');
            parameters.forEach(i => this.parameters[i] = params[i]);
        }
    }else{
        Object.keys(this.parameters).forEach(i => this.parameters[i] = params[i])
    }

    return (...args) => {
        const parameters = [];
        Object.keys(this.parameters).forEach((i, index) => parameters.push(args[index] || this.parameters[i]));

        // console.log(parameters)
        console.log(this.func.apply(null,parameters))
    }
}

defaultArguments(timesFive,{n:5})();

// add(10); // returns 19
// console.log(add_(10,7)); // returns 17
// console.log(add_()); // returns NaN
//
// add_ = defaultArguments(add_,{b:3, a:2});
// console.log(add_(10)); // returns 13 now
// console.log(add_()); // returns 5
