const array = [50, 55, 57, 58, 60 ];
const n = 3;

const container = [];

function recur(z){
    if(z === n) return container;

    const c = [];

    for (let j = 0; j < n; j++) {
        c.push(array[n - (n - j) + (z === j ? z : 0)])
    }

    container.push(c);

    return recur(++z);
}


console.log(recur( 0));
