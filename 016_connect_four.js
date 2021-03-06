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
    return "Draw";
}

function analyseWinner(data){
    const arrays = Object.values(data);

    //check diagonal both directions
    const traverseArrs = traverse(arrays);
    for (let i = 0; i < traverseArrs.length; i++) {
        const res = consecfour(traverseArrs[i]);
        if(res){
            return res;
        }
    }

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
}

function traverse(arrays){
    const container = [];

    const xx = arrays.length;
    const yy = Math.max(...arrays.map(i => i.length));

    const size = (xx >= yy ? xx : yy);

    for (let j = -size; j <= size; j++){
        const arr = [];
        const arr2 = [];

        //horizontal
        for (let i = 0; i < xx; i++) {
            const v = arrays[i][xx-(i+j)];
            arr.push(v);
        }

        //vertical
        for (let i = 0; i < yy; i++) {
            const v = arrays[j+i] && arrays[j+i][i];
            arr2.push(v);
        }

        arr.length && container.push(arr);
        arr2.length && container.push(arr2)
    }

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
