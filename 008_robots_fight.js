function fight(robot1, robot2, tactics) {
    let robotAttacking = robot1;
    let robotDefending = robot2;

    if(robot1.speed < robot2.speed){
        robotAttacking = robot2;
        robotDefending = robot1;
    }


    return attack(robotAttacking, robotDefending, tactics);
};

function attack(robotAttacking, robotDefending, tactics) {

    if (!robotDefending.tactics.length && !robotAttacking.tactics.length){
        if(robot1.health === robot2.health){
            return 'The fight was a draw.';
        }
        const winner = robot1.health > robot2.health ? robot1 : robot2;
        return `${winner.name} has won the fight.`;
    }

    if(robotAttacking.tactics.length){
        const damage = tactics[robotAttacking.tactics[0]];
        robotDefending.health -= damage;
        robotAttacking.tactics.splice(0,1);
    }

    if(robotDefending.health <= 0){
        return `${robotAttacking.name} has won the fight.`;
    }

    console.log(robotDefending, robotAttacking, tactics)

    return attack(robotDefending, robotAttacking, tactics);
};
