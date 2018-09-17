function nbDig(n, d) {
    const container = [];
    // your code
    for(let i = 0; i <= n; i++){

      const item = Math.pow(i,2).toString().split('')
      container.push(...item)
    }
    return count(container, d)
}

function count(a,i){
 var result = 0;
 for(var o in a)
  if(a[o] == i)
   result++;
 return result;
}

nbDig(11549, 1);