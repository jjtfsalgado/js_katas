
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

    console.log(data);

    return "Draw";
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
    for (let i = 0; i < 5; i++) {
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


console.log(traverse([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// `
// 4 8 12
// 3 7 11
// 2 6 10
// 1 5 9
// `
//
// `
// 1st arr[0][0]
//
// 2st arr[0][1]
//     arr[1][0]
//
// 3st arr[0][2]
//     arr[1][1]
//     arr[2][0]
//
// 4st arr[0][3]
//     arr[1][2]
//     arr[2][1]
// `
//
//     `
// 1st arr[2][0]
//
// 2st arr[1][0]
//     arr[2][1]
//
// 3st arr[0][0]
//     arr[1][1]
//     arr[2][2]
//
// 4st arr[0][1]
//     arr[1][2]
//     arr[2][3]
// `



function traverse(arrays){
    const container = [];

    const xx = arrays.length - 1;
    const yy = arrays[0].length - 1;

    // for (let i = xx; i >= 0; i--) {
    //     const arr = [];
    //     for (let j = 0 ; j <= xx-i; j++) {
    //         arr.push(arrays[i+j][j]);
    //     }
    //     console.log(arr)
    // }

    // for (let j = -yy; j < yy; j++){
    //     const arr = [];
    //     for (let i = 0; i <= xx; i++) {
    //         arr.push(arrays[i][(yy-i)+j]);
    //     }
    //     console.log(arr)
    // }

    for (let j = yy; j > 0; j--){
        const arr = [];
        for (let i = 0; i <= xx; i++) {
            const f = j-(yy-i);
            console.log(`x:${xx-i} y:${f}`);
            // arr.push(arrays[xx-i] && arrays[xx-i][f]);
        }
        console.log(arr)
    }

    //todo traver on the other two directions

    return container;
}

function consecfour(arr){
    for(let i = 0; i < arr.length; i++){
        const subArr = arr.slice(i, i+4);
        const item = subArr[0];
        if(item && subArr.every(i => i === item) && subArr.length === 4){
            return item
        }
    }
}

// console.log(whoIsWinner([ 'A_Red',
//     'A_Yellow',
//     'D_Red',
//     'A_Yellow',
//     'B_Red',
//     'C_Yellow',
//     'A_Red',
//     'A_Yellow',
//     'F_Red',
//     'B_Yellow',
//     'B_Red',
//     'G_Yellow',
//     'E_Red',
//     'D_Yellow',
//     'D_Red',
//     'B_Yellow',
//     'G_Red',
//     'F_Yellow',
//     'C_Red',
//     'F_Yellow',
//     'F_Red',
//     'F_Yellow',
//     'D_Red',
//     'F_Yellow' ])); //Red


// Test.assertEquals(whoIsWinner(["C_Yellow",
//     "E_Red",
//     "G_Yellow",
//     "B_Red",
//     "D_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "G_Red",
//     "C_Yellow",
//     "C_Red",
//     "D_Yellow",
//     "F_Red",
//     "E_Yellow",
//     "A_Red",
//     "A_Yellow",
//     "G_Red",
//     "A_Yellow",
//     "F_Red",
//     "F_Yellow",
//     "D_Red",
//     "B_Yellow",
//     "E_Red",
//     "D_Yellow",
//     "A_Red",
//     "G_Yellow",
//     "D_Red",
//     "D_Yellow",
//     "C_Red"]), "Yellow");
// Test.assertEquals(whoIsWinner(["A_Yellow",
//     "B_Red",
//     "B_Yellow",
//     "C_Red",
//     "G_Yellow",
//     "C_Red",
//     "C_Yellow",
//     "D_Red",
//     "G_Yellow",
//     "D_Red",
//     "G_Yellow",
//     "D_Red",
//     "F_Yellow",
//     "E_Red",
//     "D_Yellow"]), "Red");
// Test.assertEquals(whoIsWinner([ "A_Red",
//     "B_Yellow",
//     "A_Red",
//     "E_Yellow",
//     "F_Red",
//     "G_Yellow"]), "Draw");
