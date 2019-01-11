let carpark = [[1, 0, 0, 0, 2],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]];

function escape(carpark){
    let result = [];
    let lastPos;

    //calculate coordinate movements
    for(let i = 0; i < carpark.length; i ++){
        const level = carpark[i];
        const levelNext = carpark[i+1];
        let c1,c2;

        const init = level.findIndex(i => i === 2);
        const stairs = levelNext ? level.findIndex(i => i === 1) : level.length-1;

        let start = init !== -1 ? init : lastPos !== stairs ? lastPos : false;

        if(init === stairs){
            return [];
        }

        if(start || start === 0){
            c1 = start > stairs ? "L" : "R";
            c2 = start > stairs ? start-stairs : stairs-start;
            result.push(c1+c2);
        }

        levelNext && result.push("D1");
        lastPos = stairs;
    }

    //reduce stairs values
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
