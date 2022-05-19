function sortArray(array){
    let indices = [];

    array
        .filter((v, i) => v % 2 && indices.push(i))
        .sort((a, b) => a - b)
        .forEach((v, i) => array[indices[i]] = v);

    return array
}

//refactor

function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}