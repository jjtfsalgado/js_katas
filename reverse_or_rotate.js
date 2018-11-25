function revrot(str, sz){
    if(sz <= 0 || !str || sz > str.length){return ""};
    const chuncks = [];

    for(let i = 0; i < str.length; i+= sz){
        const subStr = str.substring(i, i + sz);
        if(subStr.length >= sz) {
            const arrSubStr = subStr.split("");

            const totalPow3 = arrSubStr.reduce((accum, value) => accum += Math.pow(parseInt(value, 10), 3), 0);
            totalPow3 % 2 === 0 ? arrSubStr.reverse() : rotate(arrSubStr, 1);

            chuncks.push(...arrSubStr);
        }
    }

    return chuncks.join("");
}

function rotate(arr, count) {
    var unshift = Array.prototype.unshift,
        splice = Array.prototype.splice;
    var len = arr.length >>> 0,
        count = count >> 0;

    unshift.apply(arr, splice.call(arr, count % len, len));
    return arr;
};

// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"

// Code wars url -> https://www.codewars.com/kata/reverse-or-rotate/javascript