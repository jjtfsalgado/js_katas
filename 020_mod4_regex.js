const Mod4 = /(\D[048]])|(12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)]/;

const r = Mod4.test("[+05620]");

console.log(r);


//0, 4 and 8

//12, 16, 32, 36, 52, 56, 72, 76, 92, 96
//20, 24, 28, 40, 44, 48, 60, 64, 68, 80, 84, 88
