function scramble(str1, str2) {
    const abc = {}
    const abc2 = {}

    for(let i = 0; i < str1.length; i++){
        const s = str1[i];
        abc[s] ? ++abc[s] : abc[s] = 1;
    }


    for(let j = 0; j < str2.length; j++){
        const l = str2[j];

        if(!abc[l]){
            return false
        }else{
            abc2[l] ? ++abc2[l] : abc2[l] = 1;
            if(abc[l] >= abc2[l]){
                continue
            }else{
                return false
            }
        }
    }
    return true;
}

// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False