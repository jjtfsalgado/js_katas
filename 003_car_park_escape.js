const carpark = [[0, 2, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0]];

function escape(carpark){
    const result = [];
    let lastIndex;

    for(let i = 0; i < carpark.length; i ++){
        const level = carpark[i];

        const startIndex = i === 0 ? level.indexOf(2) : lastIndex;
        const endIndex = i === carpark.length - 1 ? level.length - 1  : level.indexOf(1);

        if(startIndex !== endIndex){
            let c1 = startIndex > endIndex ? "L" : "R";
            let c2 = startIndex > endIndex ? startIndex-endIndex : endIndex-startIndex;
            result.push(c1+c2);
        }

        if(i !== carpark.length - 1){
            result.push("D1");
        }
        lastIndex = endIndex;
    }

    return result
}

console.log(escape(carpark));

// const result = ["L4", "D1", "R4"];
