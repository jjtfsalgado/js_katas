function race(v1, v2, g) {
    if(v1 >= v2){return null}

    const dif = v2 - v1;

    const footSec = dif /3600;
    const seconds = g/footSec;

    return secondsToHms(seconds)
}

function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    return [h,m,s];
}

console.log(race(720, 850, 70));
