var results = [
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

var expectedTable =
    " 1. FC Bayern Muenchen            1  1  0  0  6:0  3\n" +
    " 2. 1. FC Koeln                   0  0  0  0  0:0  0\n" +
    " 2. Bayer Leverkusen              0  0  0  0  0:0  0\n" +
    " 2. Borussia Dortmund             0  0  0  0  0:0  0\n" +
    " 2. Borussia Moenchengladbach     0  0  0  0  0:0  0\n" +
    " 2. Eintracht Frankfurt           0  0  0  0  0:0  0\n" +
    " 2. FC Augsburg                   0  0  0  0  0:0  0\n" +
    " 2. FC Ingolstadt                 0  0  0  0  0:0  0\n" +
    " 2. FSV Mainz 05                  0  0  0  0  0:0  0\n" +
    " 2. Hamburger SV                  0  0  0  0  0:0  0\n" +
    " 2. Hertha BSC Berlin             0  0  0  0  0:0  0\n" +
    " 2. RasenBall Leipzig             0  0  0  0  0:0  0\n" +
    " 2. SC Freiburg                   0  0  0  0  0:0  0\n" +
    " 2. Schalke 04                    0  0  0  0  0:0  0\n" +
    " 2. SV Darmstadt                  0  0  0  0  0:0  0\n" +
    " 2. TSG 1899 Hoffenheim           0  0  0  0  0:0  0\n" +
    " 2. VfL Wolfsburg                 0  0  0  0  0:0  0\n" +
    "18. Werder Bremen                 1  0  0  1  0:6  0";

var actualTable = table(results);

function table(results) {
    const data = {};
    for (let i = 0; i < results.length; i ++){
        const result = results[i];
        const regex = /(\d|-+):(\d|-+)\s(.+)\s-\s(.+)/gm;
        const captures = regex.exec(result);
        if(captures[1] === captures[2]){

        }

        console.log(captures);
    }
}