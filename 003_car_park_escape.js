const carpark = [[0, 2, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0]];

function escape(carpark){
    const result = [];
    let lastIndex;
    let started = false;

    for(let i = 0; i < carpark.length; i ++){
        const level = carpark[i];

        if(level.indexOf(2) !== -1){
            started = true;
        }

        if(!started){continue;}

        const startIndex = level.indexOf(2) !== -1 ? level.indexOf(2) : lastIndex;
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

    return result.reduce((accum, value, index, arr) => {
        let coord = accum[accum.length-1];
        let coordNext = value;

        if(coord && coordNext && (coord[0] === "D" && coordNext[0] === "D")){
            coordNext = coord[0] + (+coord[1] + 1);
            accum[accum.length - 1] = coordNext
        }else{
            accum.push(coordNext || value);
        }

        return accum;
    }, []);
}

console.log(escape(carpark));

// const result = ["L4", "D1", "R4"];
