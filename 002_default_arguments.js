function addComments( a, // comments
                      b /* more comments */ ) { return a+b; }

function defaultArguments(func, params) {
    // console.log(func);
    if(func.prototype) {
        this.parameters = {};
        this.func = func;
        let fString = func.toString();
        //remove js comments
        fString = fString.replace(/\/\/.*|\/\*[^]*\*\/|\s*/g, "");
        const capture = fString.match(/\((.*)\)/);

        if (capture) {
            const parameters = capture[1].split(',');
            parameters.forEach(i => this.parameters[i] = params[i]);
        }
    }else{
        Object.keys(this.parameters).forEach(i => this.parameters[i] = params[i])
    }

    return (...args) => {
        const parameters = [];
        Object.keys(this.parameters).forEach((i, index) => {
            // console.log(args[index])
            const arg = args[index];
            const argsLegth = args.length;
            if(index < argsLegth &&  arg === undefined){
                parameters.push(undefined);
            }else{
                parameters.push(arg || this.parameters[i]);
            }
        });

        console.log(this.func.apply(null,parameters));
    }
}

defaultArguments(addComments)(10);

//Code wars url -> https://www.codewars.com/kata/52605419be184942d400003d