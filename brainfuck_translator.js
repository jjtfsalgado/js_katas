//UNFINISHED

const translatorDicionary = {
    values:{
        ["+"]: (x) => `*p += ${x};\n`,
        ["-"]: (x) => `*p -= ${x};\n`,
        [">"]: (x) => `p += ${x};\n`,
        ["<"]: (x) => `p -= ${x};\n`,
        ["."]: (x) => "putchar(*p);\n".repeat(x),
        [","]: (x) => "*p = getchar();\n".repeat(x),
        ["["]: (x) => "if (*p) do {\n  ",
        ["]"]: (x) => "} while (*p);\n",
    },
    getValue(v, nr){
       return this.values[v](nr);
    }
};

function brainfuck_to_c(sc){
    let container = [];
    const counter = {};

    sc = optimize(sc);

    if(sc.includes("[") && !sc.includes("]") || !sc.includes("[") && sc.includes("]") || sc.match(/\]\[/g)){
        return "Error!"
    }

    for(let i = 0 ; i < sc.length; i ++){
        const charac = sc[i];
        const characNext = sc[i+1];

        counter[charac] = ++counter[charac] || 1;

        if(charac === characNext){
            continue;
        }

        container.push(translatorDicionary.getValue(charac, counter[charac]));
    }

    return container.join(" ");
}

function optimize (sc){
    const regEx = /(\[]|\<>|\+-|\><|\s)/g;

    while(sc.match(regEx)){
        sc = sc.replace(regEx, "");
    }
    return sc;
}

// console.log(optimize("[[[]]"));

// console.log(brainfuck_to_c("[[[]]"));

// console.log(brainfuck_to_c("++++"));
// console.log(brainfuck_to_c("----"));
//
// console.log(brainfuck_to_c(">>>>"));
// console.log(brainfuck_to_c("<<<<"));
//
// console.log(brainfuck_to_c("."));
// console.log(brainfuck_to_c(","));

// console.log(brainfuck_to_c("[][]"));
//
console.log(brainfuck_to_c("[[.]]"));


// (\[])(?=(?:.*(\+-))?)(?=(?:.*(\<>))?+)

// Examples
// Input:
//     +++++[>++++.<-]
// Output:
//     *p += 5;
// if (*p) do {
//     p += 1;
// *p += 4;
//     putchar(*p);
//     p -= 1;
// *p -= 1;
// } while (*p);
//Code url -> https://www.codewars.com/kata/brainfuck-translator/train/javascript


