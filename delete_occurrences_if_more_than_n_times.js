function deleteNth(arr,x){
    let duplicates = countDuplicates(arr);

    while(Object.values(duplicates).find(i => i > x)){
        for (let key of Object.keys(duplicates)) {
          if(duplicates[key]>x){
            arr.splice(arr.reverse().findIndex(i => i==key), 1)
            arr.reverse()
          }
        }
        duplicates = countDuplicates(arr)
    }
   return arr 
}

function countDuplicates(arr){
    return arr.reduce((aggregator, value, index, array) => {
      if(!aggregator[value]){
        return aggregator = {...aggregator, [value]: 1};  
      }else{
        return aggregator = {...aggregator, [value]:++aggregator[value]};
      }
    }, {})
}

deleteNth([2, 15, 15, 2, 15, 2, 2, 2, 15, 15, 15, 15, 1, 15, 1, 2, 15, 15, 2, 2],7)

// [2, 15, 15, 2, 15, 2, 2, 2, 15, 15, 15, 15, 1, 1, 2, 2]