function wave(str) {
    let waveArr = []
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (char === " "){
            continue;
        } else {
            waveArr.push(str.slice(0, i) + char.toUpperCase() + str.slice(i + 1))
        }   
    }
    return waveArr;
}

//refactor

function wave(str) {
    let result = []

    str.split("").forEach((char, i) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, i) + char.toUpperCase() + str.slice(i + i));
        }
    });

    return result;
}
