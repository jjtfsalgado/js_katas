function fight(robot1, robot2, tactics) {
    let robotAttacking = robot1;
    let robotDefending = robot2;

    if(robot1.speed < robot2.speed){
        robotAttacking = robot2;
        robotDefending = robot1;
    }


    return attack(robotAttacking, robotDefending, tactics);
};

function attack(r1, r2, tactics) {

    if (!r2.tactics.length && !r1.tactics.length){
        if(robot1.health === robot2.health){
            return 'The fight was a draw.';
        }
        const winner = r1.health > r2.health ? r1 : r2;
        return `${winner.name} has won the fight.`;
    }

    if(r2.health <= 0){
        return `${r1.name} has won the fight.`;
    }else if(r1.tactics.length){
        const damage = tactics[r1.tactics[0]];
        r2.health -= damage;
        r1.tactics.splice(0,1);
    }

    return attack(r2, r1, tactics);
};
