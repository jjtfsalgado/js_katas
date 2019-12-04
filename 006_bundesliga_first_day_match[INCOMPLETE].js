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

const actualTable = table(results);

function TeamResult(name, points, scored, taken, won, lost) {
    this.name = name;
    this.points = points;
    this.scored = scored;
    this.taken = taken;
    this.won = won;
    this.lost = lost;
}

function table(results) {
    const data = [];
    for (let i = 0; i < results.length; i ++){
        const result = results[i];

        const capture = (/((\d+):(\d+)|(-:-))\s(.+)\s-\s(.+)/gm).exec(result);
        const t1 = new TeamResult(capture[5], 0, 0, 0, 0, 0);
        const t2 = new TeamResult(capture[6], 0, 0, 0, 0 , 0);

        if(capture[2] && capture[3]){
            const isDraw = capture[2] === capture[3];
            const isWin = capture[2] > capture[3];

            if(isDraw){
                t1.points = 1;
                t2.points = 1;
            }else if(isWin){
                t1.points = 3;
                t2.points = 0;
                t1.won = 1;
                t2.lost = 1;
            }

            t1.scored = t2.taken = capture[2];
            t2.scored = t1.taken = capture[3];
        }

        data.push(...[t1,t2]);
    }

    data.sort((a,b) => a.points < b.points ? 1 : -1);
    console.log(data);

    const result = data.map((i, ix) => `${ix}. ${i.name}`);


    console.log(result);
}
