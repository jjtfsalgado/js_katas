const translate = {
    ["+"]: (x) => `*p += ${x};\n`,
    ["-"]: (x) => `*p -= ${x};\n`,
    [">"]: (x) => `p += ${x};\n`,
    ["<"]: (x) => `p -= ${x};\n`,
    ["."]: () => "putchar(*p);\n",
    [","]: () => "*p = getchar();\n",
    ["["]: () => "if (*p) do {\n",
    ["]"]: () => "} while (*p);\n",
};

function brainfuck_to_c(sc){
    const stack = [];
    const container = [];
    sc = optimize(sc);

    let counter = 1
    let indentation = 0;

    for(let i = 0 ; i < sc.length; i ++){
        const current = sc[i];
        const next = sc[i+1];

        if(current === next && ["+","-",">","<"].includes(current)){
            ++counter;
            continue
        }

        if(current === "["){
            stack.push(current)
        }else if(current === "]"){
            if(stack.length === 0){
                return "Error!"
            }

            stack.pop();
        }

        if(current === "]"){
            --indentation
        }

        container.push("  ".repeat(indentation) + translate[current](counter));

        if(current === "["){
            ++indentation
        }

        counter = 1;
    }

    if(stack.length > 0){
        return "Error!"
    }

    return container.join("");
}

function optimize (sc){
    const regEx = /([^\+\-\<\>\,\.\[\]])|(\[]|\<>|\+-|\><|\-\+)/g;

    sc = sc.trim()

    while(sc.match(regEx)){
        sc = sc.replace(regEx, "");
    }

    return sc;
}

const solution = brainfuck_to_c(",-,+++-[],+,[]>,-.-+[<,>,..-][+.<<>>>,<.<,,<-<,]>,+[.[<>++>].-+,>.+.>+>>..--+],+.<.,---<")

console.log(solution);
