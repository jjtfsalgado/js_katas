function encrypt(text, n) {
    if(n < 1 || !n){return text};

    const arr = text.split("");
    const odds = arr.filter((i, index) => index%2 === 0);
    const evens = arr.filter((i, index) => index%2 !== 0);

    const res = evens.concat(odds);
    const encrypted = res.join("");

    return n > 1 ? encrypt(encrypted, --n) : encrypted;
}

function decrypt(encryptedText, n) {
    if(n < 1 || !n){return encryptedText};

    const original = encryptedText;
    const container = [];
    let res = original;

    do{
        res = encrypt(res, 1);
        container.unshift(res)

    }while (res !== original);

    return container[n === container.length ? 0 : n]
}

//
// function crypt(text, n, isEncrypt) {
//     if(n < 1 || !n){return text};
//
//     const arr = text.split("");
//     const odds = arr.filter((i, index) => index%2 === 0);
//     const evens = arr.filter((i, index) => index%2 !== 0);
//
//     const res = isEncrypt ? evens.concat(odds) : odds.concat(evens);
//     const encrypted = res.join("");
//
//     return n > 1 ? crypt(encrypted, --n, isEncrypt) : encrypted;
// }

const text = "This is a test!";

console.log(decrypt("XEWBPMQDMOYNZOKYWNITUOIEVQTWPI", 6));
//'YXWENWIBTPUMOQIDEMVOQYTNWZPOIK'

// console.log(encrypt("This kata is very interesting!", 1));
// console.log(encrypt("This kata is very interesting!", 2));
// console.log(encrypt("This kata is very interesting!", 3));
// console.log(encrypt("This kata is very interesting!", 4));
const input = "s eT ashi tist!";

console.log(input.length);

console.log(encrypt(input, 1), 1);
console.log(encrypt(input, 2), 2);
console.log(encrypt(input, 3), 3);
console.log(encrypt(input, 4), 4);
console.log(encrypt(input, 5), 5);
console.log(encrypt(input, 6), 6);
console.log(encrypt(input, 7), 7);
console.log(encrypt(input, 8), 8);
console.log(encrypt(input, 9), 9);
console.log(encrypt(input, 10), 10);
console.log(encrypt(input, 11), 11);
console.log(encrypt(input, 12), 12);
console.log(encrypt(input, 13), 13);
console.log(encrypt(input, 14), 14);
console.log(encrypt(input, 15), 15);
console.log(encrypt(input, 16), 16);
console.log(encrypt(input, 17), 17);
console.log(encrypt(input, 18), 18);
console.log(encrypt(input, 19), 19);
console.log(encrypt(input, 20), 20);
console.log(encrypt(input, 21), 21);
console.log(encrypt(input, 22), 22);
console.log(encrypt(input, 23), 23);
console.log(encrypt(input, 24), 24);
console.log(encrypt(input, 25), 25);
console.log(encrypt(input, 26), 26);




// console.log(decrypt(encryptedText, 1));
