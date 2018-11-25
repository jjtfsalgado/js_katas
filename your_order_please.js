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

console.log(order("is2 Thi1s T4est 3a"));