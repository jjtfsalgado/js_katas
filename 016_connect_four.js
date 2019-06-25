
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

    for (let i = 0; i < plays.length; i++) {
        const play = plays[i];
        data[play[0]].push(play[1]);
        const res = analyseWinner(data);
        if(res){
            return res;
        }
    }
}

function analyseWinner(data){
    const arrays = Object.values(data);

    //check vertical
    for (let i = 0; i < arrays.length; i++) {
         const res = consecfour(arrays[i]);
         if(res){
             return res;
         }
    }

    //check horizontal
    for (let i = 0; i < arrays.length; i++) {
        const res = consecfour(arrays.map(j => j[i]));
        if(res){
            return res;
        }
    }

    //check diagonal
    const traverseArrs = traverse(arrays);
    for (let i = 0; i < traverseArrs.length; i++) {
        const res = consecfour(traverseArrs[i]);
        if(res){
            return res;
        }
    }
}

function traverse(arrays){
    const container = [];

    const xx = arrays.length - 1;
    const yy = arrays[0].length - 1;

    for (let i = xx; i >= 0; i--) {
        const arr = [];
        let diff = xx-i;
        for (let j = 0 ; j <= (diff > yy ? yy : diff); j++) {
            arr.push(arrays[i+j][j]);
        }
    }

    for (let i = 0; i <= xx; i++) {
        const arr = [];
        const diff = yy-i;
        for (let j = yy ; j >= diff; j--) {
            arr.push(arrays[i-(yy-j)][j]);
        }
        container.push(arr);
    }

    return container;
}

function consecfour(arr, dir){


    for(let i = 0; i < arr.length; i+=4){
        const subArr = arr.slice(i, i+4);
        const item = subArr[0];
        if(item && subArr.every(i => i === item) && subArr.length === 4){
            // console.log(item)
            return item
        }
    }
}

console.log(whoIsWinner(["C_Yellow",
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
    "C_Red"]));
