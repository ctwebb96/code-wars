function isPangram(string) {
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuzwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if(strArr.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true;
}