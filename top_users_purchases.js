
function idBestUsers() {
    const result = [];
    const data = [];
    const argumentsLenght = arguments.length;
    for (let i = 0; i < argumentsLenght; i++) {
        const d = arguments[i].map(j => ({type: i, item: j}));
        data.push(...d);
    }

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

    const dKeys = Object.keys(d);

    for(let i = dKeys.length - 1 ; i >= 0; i--){
        const key = dKeys[i];
        const item = d[key];
        const itemKeys = Object.keys(item);
        if(itemKeys.length === argumentsLenght){
            const nr = itemKeys.reduce((accum, i) => accum += item[i],0);
            const existent = result.find(i => i[0] === nr);

            if(existent){
                existent[1].push(key);
                existent[1].sort();
            }else{
                result.push([nr, [key]])
            }
        }
    }

    result.sort((a,b) => a[0] > b[0] ? -1 : 1);

    return result;
}

// idBestUsers();


// a1 = ['A042', 'B004', 'A025', 'A042', 'C025']
// a2 = ['B009', 'B040', 'B004', 'A042', 'A025', 'A042']
// a3 = ['A042', 'A025', 'B004']
// The result will be:
//
// 'A042'---> 5 times
// 'A025'---> 3 times
// 'B004'---> 3 times

// Code wars url -> https://www.codewars.com/kata/identifying-top-users-and-their-corresponding-purchases-on-a-website/javascript