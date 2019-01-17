const zoo = "fox,bug,chicken,grass,sheep";

const eatRules = {
    ['antelope']: ['grass'],
    ['big-fish']: ['little-fish'],
    ['bug']: ['leaves'],
    ['bear']: ['big-fish', 'bug', 'chicken', 'cow', 'sheep', 'leaves'],
    ['chicken']: ['bug'],
    ['cow']: ['grass'],
    ['fox']: ['chicken', 'sheep'],
    ['giraffe']: ['leaves'],
    ['lion']: ['antelope', 'cow'],
    ['panda']: ['leaves'],
    ['sheep']: ['grass']
};


var whoEatsWho = function(zoo) {
    let result = [];
    let loop = true;
    result.push(zoo);
    zoo = zoo.split(",");
    result = clean(zoo, result, loop);
    zoo = zoo.join(',');
    result.push(zoo);
    return result;
};

function clean(zoo, result) {
    for (let i = 0; i < zoo.length; i ++){
        const item = zoo[i];
        const rule = eatRules[item];
        const itemRight = zoo[i+1];
        const itemLeft = zoo[i-1];
        if(rule && itemLeft && rule.includes(itemLeft)){
            zoo.splice(i-1,1);
            result.push(`${item} eats ${itemLeft}`);
            clean(zoo, result);
        }else if(rule && itemRight && rule.includes(itemRight)){
            zoo.splice(i+1,1);
            result.push(`${item} eats ${itemRight}`);
            clean(zoo, result);
        }
    }

    return result;
};

console.log(whoEatsWho(zoo));