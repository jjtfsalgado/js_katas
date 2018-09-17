function findNextSquare(sq) {
  let count = -1;
  if(Number.isInteger(Math.sqrt(sq))){
    count = ++sq; 
    while(!Number.isInteger(Math.sqrt(count))){
      ++count
    }
  }
    return count;
}

findNextSquare(625)