function duplicateEncode(word){
    let str = word.toLowerCase()
    let unique = ''

    for (let i = 0; i < str.length; i++){
        if (str.lastIndexOf(str[i]) === str.indexOf(word[i])){
            unique += '(';
        } else
            unique += ')'
    }
    return unique
}

//refactor

function duplicateEncode(word){
    return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}