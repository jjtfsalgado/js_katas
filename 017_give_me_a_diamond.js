function diamond(n){
    let d = null;
    const unit = "*\n*";

    while(n > 2){
        const arr = new Array(n).fill(unit);
        d ? d += arr.join("") : d = arr.join("");
        n -= 1;
    }

    console.log(d);
    return d;
};

diamond(3);

// numberToEnglish(1.9);
