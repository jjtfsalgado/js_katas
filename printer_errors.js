function printerError(str) {
    let count = 0;
    const arr = str.toUpperCase().split("");
    for(const i of arr){
      alphabet.includes(i) ? null : ++count;
    }
    return `${count}/${str.length}`
}


const alphabet = [ 'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M']


printerError("aaaxbbbbyyhwawiwjjjwwm")