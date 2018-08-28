var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

function mxdiflg(a1, a2) {
   if(a1.length == 0 || a2.length == 0) { return -1 };
   const container = []
   a1.forEach((i) => container.push(...s2.map(j => Math.abs(j.length-i.length))));
   return container.sort((a,b) => b-a)[0];
}

mxdiflg(s1, s2);