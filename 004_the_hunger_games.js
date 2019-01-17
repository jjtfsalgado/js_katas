const input = "fox,bug,chicken,grass,sheep";

const eatData = {
    ['antelope']:['grass'],
    ['big-fish']:['little-fish'],
    ['bug']:['leaves'],
    ['bear']:['big-fish','bug', 'chicken', 'cow', 'leaves', 'sheep'],
    ['chicken']:['bug'],
    ['cow']:['grass'],
    ['fox']:['chicken','sheep'],
    ['giraffe']:['leaves'],
    ['lion']:['antelope', 'cow'],
    ['panda']:['leaves'],
    ['sheap']:['grass']
};

var whoEatsWho = function(zoo) {
    const result = [];
    zoo = input.split(",");



    return [zoo, zoo]
};

function cleanZoo(zoo, result) {
    for (let i = 0; i < zoo.length; i ++){
        const item = zoo[i];
        const itemL = zoo[i-1];
        const itemR = zoo[i+1];




    }
};

whoEatsWho(input);
