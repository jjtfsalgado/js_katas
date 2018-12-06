// function properFractions(d){
//     if(d == 1){return 0;}
//
//     let counter = 1;
//     const m = multiples(d);
//
//     for(var i = 2; i < d; i++){
//         if(m.some(j => (i % j) === 0)){
//             continue;
//         };
//         counter++
//     }
//
//     return counter
// }
//
// function multiples(d){
//     const multiples = [];
//     for(let i = 2; i <= d/2; i++){
//         if(d % i === 0){
//             multiples.push(i);
//         }
//     }
//     return multiples
// }

function properFractions(d){
    //your code here
    let counter = 0;

    for(var i = 0; i < d; i++){
        if(gcd(i,d) == 1){
            counter ++
        }
    }

    return counter
}

function gcd(a,b){
    if (b == 0){
        return a
    }else{
        //recursion
        return gcd(b, a % b)
    }
}