function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let newStr = str.split('')
    let sentence = newStr.filter((char) => !vowels.includes(char))

    return sentence.join('');
}

//refactor

function disemvowel(str){
    return str.replace(/[aeiou]/gi, '');
}