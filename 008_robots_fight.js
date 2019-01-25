const robot1 = { name: 'Rocky',
    health: 699,
    speed: 51,
    tactics:
        [ 'punch',
            'punch',
            'laser',
            'missile',
            'punch',
            'laser',
            'missile',
            'punch',
            'laser',
            'missile',
            'punch',
            'laser',
            'missile' ] }

const robot2 = { name: 'Missile Bob',
    health: 515,
    speed: 28,
    tactics:
        [ 'punch',
            'punch',
            'laser',
            'missile',
            'punch',
            'laser',
            'missile',
            'punch',
            'laser',
            'missile',
            'punch',
            'laser',
            'missile' ] }

const tactics = { punch: 20, laser: 30, missile: 35 }

function fight(robot1, robot2, tactics) {
    const robotAttacking = robot1.speed > robot2.speed ? robot1 : robot2;
    const robotDefending = robot1.speed < robot2.speed ? robot1 : robot2;

    return attack(robotAttacking || robot1, robotDefending || robot2);
};

function attack(robotAttacking, robotDefending) {
    if(!robotAttacking.tactics.length){
        return attack(robotDefending, robotAttacking);
    }

    const damage = tactics[robotAttacking.tactics[0]];
    robotDefending.health -= damage;
    robotAttacking.tactics.splice(0,1);

    if (!robotDefending.tactics.length && !robotAttacking.tactics.length){
        if(robot1.health === robot2.health){
            return 'The fight was a draw.';
        }
        const winner = robot1.health > robot2.health ? robot1 : robot2;
        return `${winner.name} has won the fight.`;
    }else if(robotDefending.health <= 0){
        return `${robotAttacking.name} has won the fight.`;
    }

    return attack(robotDefending, robotAttacking);
};

console.log(fight(robot1, robot2, tactics));
