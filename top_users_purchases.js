var a1 = ['A042', 'B004', 'A025', 'A042', 'C025'];
var a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042'];
var a3 = ['A042', 'A025', 'B004'];



function idBestUsers(a1, a2, a3) {
    // your code here
    const result = [];
    const a1Data = a1.map(i => ({type: 1, item: i}));
    const a1Data1 = a2.map(i => ({type: 2, item: i}));
    const a1Data2 = a3.map(i => ({type: 3, item: i}));

    const data = [...a1Data, ...a1Data1, ...a1Data2];

    const d = data.reduce((accum , i) => {
        accum = accum || {};

        const item = accum[i.item];

        if(item){
            let ocurrences = accum[i.item][i.type];

            if(ocurrences){
                accum[i.item][i.type] = ++ocurrences
            }else{
                accum[i.item][i.type] = 1;
            }
        }else{
            accum[i.item] = {[i.type]: 1};
        }

        return accum;
    }, {});

    for(let i = Object.keys(i); i > 0; i++){
        const item = d[i];
        let counter = 0;
        const itemKeys = Object.keys(item).length;

        if(itemKeys === 3){
            for(let j = itemKeys; j > 0; j++){
                counter += item[j]
            }
            result.push()
        }
    }

    return d;
}

idBestUsers(a1, a2, a3);



// [[5, ['A042']], [3, ['A025', 'B004']]]