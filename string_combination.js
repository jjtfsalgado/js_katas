
function sloganMaker(data) {
    data = [...new Set(data)];
    const result = [];
    for (let i = data.length - 1; i >= 0; i--){
        for (let j = data.length - 1; j >= 0; j--){
            result.push(startToEnd(data, data[j], data[i]));
        }
    }
    return [...new Set(result)];
}

function startToEnd(data, item, begin){
    const container = [];
    for (let i = 0; i < data.length; i++){
        if(item === data[i] || begin === data[i]){
            continue
        }
        container.push(data[i])
    }

    if(item != begin){
        container.unshift(item);
        container.unshift(begin);
    }else{
        container.unshift(begin);
    }

    return container.join(" ")
}



// sloganMaker(["super","hot","guacamole"]);

//[ 'super hot guacamole',
//  'super guacamole hot',
//  'hot super guacamole',
//  'hot guacamole super',
//  'guacamole super hot',
//  'guacamole hot super' ]


//Code wars url -> https://www.codewars.com/kata/5865a407b359c45982000036