function numberToEnglish(n) {
    if(isNaN(n)){
        throw new Error("Is NaN!!")
    }
    if(!isFinite(n)){
        return `${n < 0 ? "negative " : ""}infinity`;
    }

    let english = n < 0 ? "negative " : "";
    const arr = n.toString().split(".")
    const numberPart = arr[0];
    const decimalPart = arr[1];
    const numberPartGroups = numberPart.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

    english += numberPartGroups.map((i, ix) => hundredthToEnglish(i, numberPartGroups.length - ix, ix)).filter(i => !!i).join(" ");

    if(decimalPart) {
        english += " point " + decimalPart.split("").map(i => mapNumberToEnglish[i]).filter(i => !!i).join(" ");
    };

    return english;
}

function hundredthToEnglish(n, groupsLength, groups){
    if(n === "0") return "zero";

    n = parseInt(n);
    if(!n) return;
    n = n.toString();

    let english = "";
    let tenth = n;

    if(n.length === 3){
        english += `${mapNumberToEnglish[n[0]]} hundred`;
        tenth = parseInt(n.substring(1)).toString();
    }

    if(tenth && tenth !== "0"){
        const englishTenth = tenthToEnglish(tenth);
        if(english){
            english += " and ";
        }else if (groups && groupsLength === 1) {
            english +=  "and ";
        }
        english += englishTenth;
    }

    if(groupsLength !== 1){
        english += ` ${mapUnits[groupsLength]}`;
    }

    return english;
}

function tenthToEnglish(n){
    let english = mapNumberToEnglish[n]
    if(english) return english;

    const n0 = mapNumberToEnglish[parseInt(n[0]) * 10];
    const n1 = mapNumberToEnglish[parseInt(n[1])];
    english = n0 && n1 ? `${n0}-${n1}` : n1;

    return english;
}

const mapUnits = {
    1: "hundred",
    2: "thousand",
    3: "million",
    4: "billion",
    5: "trillion",
    6: "quadrillion"
}

const mapNumberToEnglish = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"
}


// const one = numberToEnglish(100);
// const two = numberToEnglish(5);
// const three = numberToEnglish(10);
// const four = numberToEnglish(1234567899);
// const five = numberToEnglish(999);
// const six = numberToEnglish(2000000001);
const seven = numberToEnglish(100);

//
// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
// console.log(five)
// console.log(six)
console.log(seven)
// console.log(five == 'two thousand and one')
