//7*5
function whoIsWinner(piecesPositionList) {
    const data = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
    };

    const plays = piecesPositionList.map(i => i.split("_"));
    plays.forEach(i => data[i[0]].push(i[1]));
    return analyseWinner(data)
}

function analyseWinner(data){
    const arrays = Object.values(data);

    //check vertical
    for (let i = 0; i < arrays.length; i++) {
         consecfour(arrays[i])
    }

    //check horizontal
    for (let i = 0; i <= 6; i++) {
        consecfour(arrays.map(j => j[i]))
    }

    //check diagonal
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j <= 4; j++) {
            const l = arrays[i][j];

            consecfour(arrays.map(j => j[i]))
        }
    }
}

function consecfour(arr, dir){
    for(let i = 0; i < arr.length; i+=4){
        const subArr = arr.slice(i, i+4);
        const item = subArr[0];
        if(item && subArr.every(i => i === item) && subArr.length === 4){
            return item
        }
    }
}

whoIsWinner(["C_Yellow",
    "E_Red",
    "G_Yellow",
    "B_Red",
    "D_Yellow",
    "B_Red",
    "B_Yellow",
    "G_Red",
    "C_Yellow",
    "C_Red",
    "D_Yellow",
    "F_Red",
    "E_Yellow",
    "A_Red",
    "A_Yellow",
    "G_Red",
    "A_Yellow",
    "F_Red",
    "F_Yellow",
    "D_Red",
    "B_Yellow",
    "E_Red",
    "D_Yellow",
    "A_Red",
    "G_Yellow",
    "D_Red",
    "D_Yellow",
    "C_Red"]);
