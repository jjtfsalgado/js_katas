const carpark = [[0, 0, 0, 0, 2]];

function escape(carpark){
    const result = [];
    let lastPos;

    for(let i = 0; i < carpark.length; i ++){
        const level = carpark[i];
        const levelNext = carpark[i+1];
        let c1,c2;

        const init = level.findIndex(i => i === 2);
        const stairs = levelNext ? level.findIndex(i => i === 1) : level.length-1;

        let start = init !== -1 ? init : lastPos !== stairs ? lastPos : false;

        if(start || start === 0){
            c1 = start > stairs ? "L" : "R";
            c2 = start > stairs ? start-stairs : stairs-start;
            result.push(c1+c2);
        }

        levelNext && result.push("D1");
        lastPos = stairs;
    }

    console.log(result)
}

escape(carpark);

// const result = ["L4", "D1", "R4"];
