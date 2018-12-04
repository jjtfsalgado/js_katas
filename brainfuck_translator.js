const translatorDicionary = {
    ["+"]: "*p += X;\n",
    ["-"]: "*p -= X;\n",
    [">"]: "p += Y;\n",
    ["<"]: "p -= Y;\n",
    ["."]: "putchar(*p);\n",
    [","]: "*p = getchar();\n",
    ["["]: "if (*p) do {\\n",
    ["]"]: "} while (*p);\\n"
};

function brainfuck_to_c(sc){
    let container = '';

    for(let i = 0 ; i < sc.length; i ++){
        const charac = sc[i];
        const characNext = sc[i+1];

        if(charac == "+" && characNext == "-" || charac == "<" && characNext == ">" || charac == "[" && characNext == "]" || charac == characNext){
            continue;
        }

        container += translatorDicionary[charac];
    }

    return container;
}


function optimization(){

}


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

console.log(brainfuck_to_c("++++"));
// brainfuck_to_c("----");
//
// brainfuck_to_c(">>>>");
// brainfuck_to_c("<<<<");
//
// brainfuck_to_c(".");
// brainfuck_to_c(",");
//
// brainfuck_to_c("[[[]]");
//
// brainfuck_to_c("[][]");
//
// brainfuck_to_c("[.]");