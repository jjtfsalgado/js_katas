function diamond(n){
    const result = [];

    if(n<3){
        return null;
    }

    for (let i = 0; i < n; i++) {
        let m = Math.trunc(n/2); //3
        let layer = "";
        let star = (i < m ? (n - i - m - 1) : (i - m));

        for (let j = 0; j < n; j++) {
            if(j >= star && j < (n-star)){
                layer += "*"
            }else if(j < star){
                layer += " ";
            }
        }
        result.push(layer+"\n");
    }

    return result.join("");
};

console.log(diamond(7));

// numberToEnglish(1.9);
