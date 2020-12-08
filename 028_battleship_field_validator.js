function validateBattlefield(field) {
    const prevCoordinates = {};
    const results = {
        4: 1,
        3: 2,
        2: 3,
        1: 4
    }

    for (let y = 0; y < field.length; y++) {
        const arr = field[y];
        for (let x = 0; x < arr.length; x++) {
            if (checkInvalidField(x, y, field, prevCoordinates, results, 4)) return false;
        }
    }

    return !Object.values(results).some(i => i !== 0);
}

function checkInvalidField(xx, yy, field, prevCoord, results, size) {
    if (prevCoord[`${xx}.${yy}`] || !size) return;

    const resultX = field[yy].slice(xx, size + xx);
    const resultY = [];
    for (let i = yy; i < (size + yy); i++) {
        if (!field[i]) continue;
        resultY.push(field[i][xx]);
    }

    const boatX = resultX.length === size && !resultX.some(i => i === 0);
    const boatY = resultY.length === size && !resultY.some(i => i === 0);
    const result = boatX ? resultX : resultY;
    const coord = ix => (boatX ? `${xx + ix}.${yy}` : `${xx}.${yy + ix}`);

    if (boatX || boatY) {
        if (checkForContact(xx, yy, field, size, boatY)) return true;
        --results[size];
        if (results[size] < 0) return true;
        result.map((i, ix) => prevCoord[coord(ix)] = size);
    }

    return checkInvalidField(xx, yy, field, prevCoord, results, --size)
}

function checkForContact(xxi, yyi, field, size, vertical) {
    const xx = vertical ? yyi : xxi;
    const yy = vertical ? xxi : yyi;

    for (let j = yy - 1; j <= yy + 1; j++) {
        for (let i = xx - 1; i <= xx + size; i++) {
            if (i >= xx && i < xx + size && j === yy) continue;

            const y = vertical ? i : j;
            const x = vertical ? j : i;

            if (field[y] && field[y][x] === 1) {
                return true;
            }
        }
    }
}

validateBattlefield(
    [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]])
