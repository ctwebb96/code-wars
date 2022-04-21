function printerError(s) {
    let goodLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
    let numerator = s.split('').filter(x => !goodLetters.includes(x)).length
    let denominator = s.split('').length

    return numerator.toString() + '/' + denominator.toString()
}