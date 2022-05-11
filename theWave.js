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

