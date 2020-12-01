function numberToEnglish(n) {
    let english = "";

    // Return the name of the number as a string.
    const groups = n.toString().match(/\d{1,3}/g)

    for (let i = 0; i < groups.length; i++) {
        const number = groups[i];

        let string = mapNumberToEnglish[number];

        if(!string){
            string = hundredToEnglish(number)
        }

        english += string
    }

    return english;
}

function hundredToEnglish(n){
    let english = ""

    for (let i = 0; i < n.length; i++) {
        const number = n[i];

        const string = mapNumberToEnglish[number];

        if(string){
            let s = string;

            if(n.length === 3 && i === 0){
                s = s + " hundred";
            }

            english += s;
        }
    }

    return english;
}

const mapNumberToEnglish = {
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
    11: "evelen",
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


const one = numberToEnglish(1);
const two = numberToEnglish(5);
const three = numberToEnglish(10);
const four = numberToEnglish(99);
const five = numberToEnglish(100);
// const five = numberToEnglish(1234567899);


console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(five)
