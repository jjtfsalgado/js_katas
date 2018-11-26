function wave(string){
    const arr = string.split("");
    return arr.reduce((accum, i, index) =>{
        const sArr = string.split("");
        sArr[index] = string[index].toUpperCase();
        const sAr = sArr.join("");
        sAr !== string && accum.push(sAr);
        return accum;
    },[])
}

wave("hello");

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// Code wars url -> https://www.codewars.com/kata/mexican-wave/train/javascript