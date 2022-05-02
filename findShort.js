function findShort(s){
    let nums = s.split(' ').sort((a, b) => a.length - b.length);
    return nums[0].length
}

//refactor

function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
}