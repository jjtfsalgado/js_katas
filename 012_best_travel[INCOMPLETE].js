const array = [50, 55, 57, 58, 60 ];
const n = 3;
const container = [];

let count = 0;

function loop(arr, start) {
    ++count;

    for (let i = start || 0; i < array.length; i++) {
        const a = arr.concat(i);

        if (a.length < n) {
            loop(a, a[a.length - 1] + 1);
        }else if(a.length === n){
            container.push(a);
        }
    }
}

function start(){
    for (let i = 0; i < n; i++) {
        loop([array[i]], i + 1);
    }
    console.log(container)
    console.log(count)
}


start();




