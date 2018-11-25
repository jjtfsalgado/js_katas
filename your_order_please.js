function order(words){
    const container = [];
    const numbers = [1,2,3,4,5,6,7,8,9];
    const arr = words.split(" ");

    arr.forEach(i => {
        const nr = i.split("").find(j => numbers.includes(parseInt(j)));
        container.push({
            word: i,
            nr: parseInt(nr)
        })
    });

    container.sort((a, b) => (a.nr < b.nr) ? -1 : (a.nr > b.nr) ? 1 : 0);
    return container.reduce((accum, value) => accum.concat(value.word), []).join(" ");
}

//Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//Code wars url -> https://www.codewars.com/kata/your-order-please/javascript