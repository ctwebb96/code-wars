function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((acc, x) => acc + x, 0);

}