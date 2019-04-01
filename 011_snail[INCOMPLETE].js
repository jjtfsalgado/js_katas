const snail = (array, result, counter) => {
    result = result || [];
    const size = array.length - counter;
    console.log(counter);

    for (let i = 0; i < 4; i++) {
        if(i === 0){
            result.push(...array[counter].slice(counter > 0 ? 1 : 0, size))
        }else if(i === 1){
            for (let j = 1 + counter; j < size - 1; j++) {
                const ar = array[j];
                result.push(ar[size - 1])
            }
        }else if(i === 2){
            result.push(...array[size - 1].slice(counter, size).reverse())
        }else if(i === 3){
            for (let j = size - 2; j > counter; j--) {
                const ar = array[j];
                result.push(ar[counter])
            }
        }
    }

    ++counter;

    if((array.length - counter) > (array.length / 2)){
        snail(array, result, counter)
    }

    return result;
};

array3 = [
    [1,2,3,4,5],
    [5,6,7,8,3],
    [9,7,2,4,0],
    [2,4,5,6,1],
    [4,7,3,2,9]
];

console.log(snail(array3, [], 0)); //[1,2,3,4,5,3,0,1,9,2,3,7,4,2,9,5,6,7,8,4,6,5,4,7,2]
