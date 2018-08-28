const alphabet =  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function encode(input) {
  if(!input){
    return '';
  }
  const arrInput =  input.toUpperCase().split('');
  return arrInput.reduce((accumulator, value, index, array) => {

    let v = value;

    if(alphabet.includes(v) && index > 0) {
      const firstNaN = getFirstNaN(array, index)
      const prvIndexAlph = alphabet.findIndex(i => i === firstNaN);
      const indexAlph = alphabet.findIndex(i => v === i);
      let sumIndex = indexAlph + prvIndexAlph + 1; 

      if(sumIndex >= alphabet.length ){
        sumIndex = sumIndex - alphabet.length
      }
      v = alphabet[sumIndex];
    }
    
    return accumulator += v
  }, "")
}

function decode(input) {
  if(!input){
    return '';
  }
  const arrInput =  input.toUpperCase().split('');
  return arrInput.reduce((accumulator, value, index, array) => {

    let v = value;

    if(alphabet.includes(v) && index > 0) {
      const firstNaN = getFirstNaN(accumulator.split(""), index)
      const prvIndexAlph = alphabet.findIndex(i => i === firstNaN);
      const indexAlph = alphabet.findIndex(i => v === i);
      let sumIndex = indexAlph - prvIndexAlph -1; 
      if(sumIndex < 0){
        const al = alphabet.length + sumIndex;
        sumIndex = al
      }
      v = alphabet[sumIndex];
    }
    
    return accumulator += v
  }, "")
}

function getFirstNaN(arr, indexArr){
  return arr.filter((i, index) => index < indexArr).reverse().find(i => alphabet.includes(i))
}