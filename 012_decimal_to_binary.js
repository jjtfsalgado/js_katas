//Convert a number from decimal base to binary base

function decimalToBinay(number){
    const result = [];

    if(number === 0){return number};

    while(number !== 0){
        result.push(Math.floor(number % 2));
        number = Math.floor(number / 2)
    }

    return result;
}


console.log(decimalToBinay(16));