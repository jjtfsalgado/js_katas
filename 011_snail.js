snail = (array) => {
    const snail = [];
    const size = array.length;

    for (let i = 0; i < array.length; i++) {
        const arr = array[i];

        if((size - i) === array.length){
            snail.push(...arr);
            continue;
        }

        for (let j = 0; j < arr.length; j++) {


            console.log(array[i][j]);
        }
    }
};

array3 = [ [1,2,3,4,5],
    [5,6,7,8,3],
    [9,7,2,4,0],
    [2,4,5,6,1],
    [4,7,3,2,9]
];

console.log(snail(array3)); //[1,2,3,4,5,3,0,1,9,2,3,7,4,2,9,5,6,7,8,4,6,5,4,7,2]