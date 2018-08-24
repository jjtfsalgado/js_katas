function decompose(n){
  const regex = /(\w*)\/(\w*)/g;
  const fractionResult = regex.exec(n);
  let numerator; let denominator;
  if(fractionResult){
    numerator = fractionResult[1];
    denominator = fractionResult[2];
  }else{
    const fraction = convertToFraction(n);
    numerator = fraction.numerator;
    denominator = fraction.denominator;
  }

  const divResult = numerator / denominator;
  if(Number.isInteger(divResult) && divResult !== 0){
    return [divResult.toString()];
  }else if(divResult === 0){
    return [];
  }

  return getEgyptianFractions(numerator, denominator, [], numerator/denominator,  numerator/denominator)
}

var tolerance = 1.0E-15;

function getEgyptianFractions(numerator, denominator, result, value, original){
  let denom = Math.ceil(denominator/numerator);
  value = value - (1/denom);
  result.push( denom === 1 ? "1" : 1 + "/" + denom); 
  const fraction = convertToFraction(value);
  if(value > tolerance){
    return getEgyptianFractions(fraction.numerator, fraction.denominator, result, value, original)
  }else{
    return result
  }
}

function gcd(a,b){ 
  if (b < tolerance) return a;
  return gcd(b, Math.floor(a % b));    
}

function convertToFraction(x) {
    var h1=1; var h2=0;
    var k1=0; var k2=1;
    var b = x;
    do {
        var a = Math.floor(b);
        var aux = h1; h1 = Math.round(a*h1+h2); h2 = aux;
        aux = k1; k1 = Math.round(a*k1+k2); k2 = aux;
        b = 1/(b-a);
    } while (Math.abs(x-h1/k1) > x*1.0E-13);
    
    return {
      numerator: h1,
      denominator: k1
    } 
}

decompose("50/4187") //result [ '1/84', '1/27055', '1/1359351418' ]





