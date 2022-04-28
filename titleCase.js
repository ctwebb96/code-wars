function titleCase(title, minorWords){
    if(title){
        const minorArray = minorWords ? minorWords.split(" ").map(word => word.toLowerCase()) : ['']
        let titleArray = title.split(" ")
        let finalTitle = []
        titleArray.map(word => {
            if(minorArray.includes(word.toLowerCase())){
                finalTitle.push(word.toLowerCase())
            } else {
                finalTitle.push(capitalise(word))
            }
        })
            finalTitle[0] = capitalise(finalTitle[0])
            return finalTitle.join(" ")
    }
            else return title
    }

function capitalise(word){
    let newWord = []
    newWord.push(word[0].toUpperCase())
    for (let i = 1; i < word.length; i++){
        newWord.push(word[i].toLowerCase())
    }
    return newWord.join("")
}

//refactor

function titleCase(title, mionrWords) {
    let minorWords = typeof minorWords !== "undefined" ? mionrWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
        if(v != "" ( (mionrWords.indexOf(v) === - 1) || i == 0)) {
            v = v.split('');
            v[0] = v[0].toUpperCase();
            v = v.join('');
        }
        return v;
    }) .join(' ')
}