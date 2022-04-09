function find_average(array) {
    return array.reduce((sum, x) => sum + x) / array.length;
}