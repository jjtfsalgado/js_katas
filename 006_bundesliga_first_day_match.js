
const results = [
    "6:0 FC Bayern Muenchen - Werder Bremen",
    "-:- Eintracht Frankfurt - Schalke 04",
    "-:- FC Augsburg - VfL Wolfsburg",
    "-:- Hamburger SV - FC Ingolstadt",
    "-:- 1. FC Koeln - SV Darmstadt",
    "-:- Borussia Dortmund - FSV Mainz 05",
    "-:- Borussia Moenchengladbach - Bayer Leverkusen",
    "-:- Hertha BSC Berlin - SC Freiburg",
    "-:- TSG 1899 Hoffenheim - RasenBall Leipzig"
];

// const expectedTable =
//     " 1. FC Bayern Muenchen            1  1  0  0  6:0  3\n" +
//     " 2. 1. FC Koeln                   0  0  0  0  0:0  0\n" +
//     " 2. Bayer Leverkusen              0  0  0  0  0:0  0\n" +
//     " 2. Borussia Dortmund             0  0  0  0  0:0  0\n" +
//     " 2. Borussia Moenchengladbach     0  0  0  0  0:0  0\n" +
//     " 2. Eintracht Frankfurt           0  0  0  0  0:0  0\n" +
//     " 2. FC Augsburg                   0  0  0  0  0:0  0\n" +
//     " 2. FC Ingolstadt                 0  0  0  0  0:0  0\n" +
//     " 2. FSV Mainz 05                  0  0  0  0  0:0  0\n" +
//     " 2. Hamburger SV                  0  0  0  0  0:0  0\n" +
//     " 2. Hertha BSC Berlin             0  0  0  0  0:0  0\n" +
//     " 2. RasenBall Leipzig             0  0  0  0  0:0  0\n" +
//     " 2. SC Freiburg                   0  0  0  0  0:0  0\n" +
//     " 2. Schalke 04                    0  0  0  0  0:0  0\n" +
//     " 2. SV Darmstadt                  0  0  0  0  0:0  0\n" +
//     " 2. TSG 1899 Hoffenheim           0  0  0  0  0:0  0\n" +
//     " 2. VfL Wolfsburg                 0  0  0  0  0:0  0\n" +
//     "18. Werder Bremen                 1  0  0  1  0:6  0";


const sol = table(results)

function TeamResult(name, scored, taken, points = 0, won = 0, lost = 0, tie = 0, position) {
    this.name = name;
    this.scored = scored;
    this.taken = taken;
    this.points = points;
    this.won = won;
    this.lost = lost;
    this.tie = tie;
    this.position = position;
}

function table(results) {
    const data = [];
    for (let i = 0; i < results.length; i++) {
        const result = results[i];

        const capture = (/((\d+):(\d+)|(-:-))\s(.+)\s-\s(.+)/gm).exec(result);

        const t1 = new TeamResult(capture[5], capture[2], capture[3]);
        const t2 = new TeamResult(capture[6], capture[3], capture[2]);

        if (t1.scored != null) {
            const winner = t1.scored > t2.scored ? t1 : t2
            const loser = t1.scored > t2.scored ? t2 : t1;
            if (t1.scored === t2.scored) {
                t1.points = t2.points = t1.tie = t2.tie = 1;
            } else {
                winner.points = 3;
                loser.points = 0;
                winner.won = 1;
                loser.lost = 1
            }
        }

        data.push(...[t1, t2]);
    }

    return data.sort((a, b) => {
        const teamA = a;
        const teamB = b;

        if (teamA.points > teamB.points) return -1;
        if (teamA.points < teamB.points) return 1;
        if (getGoalDifference(teamA) > getGoalDifference(teamB)) return -1;
        if (getGoalDifference(teamA) < getGoalDifference(teamB)) return 1;
        if (teamA.scored > teamB.scored) return -1;
        if (teamA.scored < teamB.scored) return 1;
        if (teamA.name.toLowerCase() < teamB.name.toLowerCase()) return -1;
        if (teamA.name.toLowerCase() > teamB.name.toLowerCase()) return 1;

        return 0;
    }).map((value, index, array) => {
        const nextValue = array[index + 1];
        if (!nextValue) {
            return stringifyTeam(value, true);
        }

        if (!value.position) {
            value.position = 1
        }

        if (value.points === nextValue.points && getGoalDifference(value) === getGoalDifference(nextValue) && value.scored === nextValue.scored) {
            nextValue.position = value.position;
        } else {
            nextValue.position = index + 2;
        }

        return stringifyTeam(value);
    }).join("")
}

function getGoalDifference(team) {
    return team.scored - team.taken || 0
}

function stringifyTeam(team, last) {
    const position = team.position.toString().length === 1 ? ` ${team.position}` : team.position;
    const name = team.name + new Array(30 - team.name.length).fill(" ").join("");
    const games = team.won + team.tie + team.lost;

    return `${position}. ${name}${games}  ${team.won}  ${team.tie}  ${team.lost}  ${team.scored || 0}:${team.taken || 0}  ${team.points}${!last ? "\n" : ""}`
}
