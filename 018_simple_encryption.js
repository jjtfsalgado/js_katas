function encrypt(text, n) {
    return crypt(text, n, true)
}

function decrypt(encryptedText, n) {
    return crypt(encryptedText, n)
}


function crypt(text, n, isEncrypt) {
    if(n < 1 || !n){return text};

    const arr = text.split("");
    const odds = arr.filter((i, index) => index%2 === 0);
    const evens = arr.filter((i, index) => index%2 !== 0);

    const res = isEncrypt ? evens.concat(odds) : odds.concat(evens);
    const encrypted = res.join("");

    return n > 1 ? crypt(encrypted, --n, isEncrypt) : encrypted;
}

const text = "This is a test!";

const encryptedText = encrypt(text, 1);
console.log(encryptedText);

console.log(decrypt(encryptedText, 1));