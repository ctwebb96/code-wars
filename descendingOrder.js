function descendingOrder(n) {
    let arr = n.toString().split('')
    return +arr.sort().reverse().join('')

}

//refactor

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}
