function deleteNth(arr,x){
    const duplicates = countDuplicates(arr);


    for (let key of Object.keys(duplicates)) {
      if(duplicates[key]>=x){
        arr.splice(arr.reverse().findIndex(i => i==key), 1)
        return arr.reverse()
      }
    }
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
