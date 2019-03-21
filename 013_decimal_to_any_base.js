function decimalToBase(number, base){
    const result = [];

    if(number === 0){return number};

    while(number !== 0){
        result.push(Math.floor(number % base));
        number = Math.floor(number / base)
    }

    return result.reverse().join("");
}


console.log(decimalToBase(16, 10));