const array = [50, 55, 57, 58, 60 ];
const n = 3;
const container = [];

function loop(arr, start) {


    for (let i = start || 0; i < array.length; i++) {
        const a = arr.concat(i);

        if (a.length < n) {
            loop(a, start + 1);
        }else if(a.length === n){
            container.push(a);
        }
    }
}

function start(){
    for (let i = 0; i < n; i++) {
        loop([i], i + 1);
    }
    console.log(container)
}


start();




