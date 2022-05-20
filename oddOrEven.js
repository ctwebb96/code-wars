function oddOrEven(array) {
    let num = array.reduce((val, acc) => val + acc, 0)
    if (num === 0) {
        return "even"
    } else if (num % 2 === 0) {
        return "even"
    } else if (num % 2 !== 0) {
        return "odd"
    }
}

//refactor

function oddOrEven(arr) {
    return arr.reduce((a,b) => a+b, 0) % 2 ? 'odd' : 'even';
}