function findOutlier(integers){
  const left = integers[0]
  const middle = integers[Math.ceil(integers.length/2)];
  const last = integers[integers.length-1];

  const leftR = left % 2 === 0;
  const middleR = middle % 2 === 0;
  const lastR = last % 2 === 0;

  const isOdd = (leftR && middleR && lastR) || (leftR && middleR && !lastR) || (leftR && !middleR && lastR) || (!leftR && middleR && lastR);

  if(isOdd){
    return integers.find(i => i % 2 !== 0);
  }else{
    return integers.find(i => i % 2 === 0);
  }
}

findOutlier([2,6,8,10,3])