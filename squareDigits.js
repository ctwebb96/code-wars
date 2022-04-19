function squareDigits(num) {
    let nums = String(num).split('')
    let newnum = nums.map((x => Math.pow(x, 2))).join('');
    return parseInt(newnum);
}