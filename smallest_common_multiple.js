

function smallestCommons(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return getLcm(min, min+1 ,min,max);
}

//  Euclidean algorithm
 function gcd(a,b){ 
    if (b == 0){
      return a
    }else{
      //recursion
      return gcd(b, a % b)
    }
 }

function getLcm(min, max, start,end) {
  let lcm = (min * max / gcd(min, max));
  if(min === end){
    return lcm
  }
  //recursion
  return getLcm(start++, lcm,start,end)
}

smallestCommons([2, 10])