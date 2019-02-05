snail = (array) => {
    const snail = [];
    const size = array.length;

    for (let i = 0; i < size; i++) {
        const arr = array[i];
        if(i === 0){
            snail.push(...arr);
            continue;
        }

        if(i%2 === 0){

        }
    }
};

array = [[1,2,3],[4,5,6],[7,8,9]];
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

console.log(snail(array));