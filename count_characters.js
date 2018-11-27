function count (string) {
    return string.split("").reduce((aggregator, value, index, array) => {
        if(!aggregator[value]){
            return aggregator = {...aggregator, [value]: 1};
        }else{
            return aggregator = {...aggregator, [value]:++aggregator[value]};
        }
    }, {})
}

// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

// code wars url -> https://www.codewars.com/kata/count-characters-in-your-string/train/javascript