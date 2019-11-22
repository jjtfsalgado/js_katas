const array = [50, 55, 57, 58, 60 ];

const container = [];



function recur(arr,n, start, ...rest){
    const c = [];


    for (let j = start; j < n; j++) {
        c.push(arr[j])
    }


    console.log(c)

}


console.log(recur(array,3, 0));
