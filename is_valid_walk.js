function isValidWalk(walk) {
  if(walk.length !==10){
    return false;
  }
  const result = walk.reduce((aggregator, value, index, array) => {
    const coord = values[value];
    aggregator[0] += coord[0]
    aggregator[1] += coord[1]
    return aggregator
  }, [0,0]).join('');

  return result == '00'
}

const values = {
  n:[1,0],
  s:[-1,0],
  e:[0,1],
  w:[0,-1]
}

isValidWalk([ 'n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's' ]);