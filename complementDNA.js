//day 8
function DNAStrand(dna) {
    let match = []
    let arr = dna.split('')
    arr.forEach((x) => {
        if (x === 'A') {
            match.push('T')
        } else if (x === 'T') {
            match.push('A')
        } else if (x === 'C') {
            match.push('G')
        } else if (x === 'G') {
            match.push('C')
        } else {
            return match
        }
    });
    return match.join('')
}

///refactored


let pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}