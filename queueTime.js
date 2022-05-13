function queueTime(customers, n) {
    let arr = new Array(n).fill(0);

    for(let i = 0; i < customers.length; i++) {
        let idx = arr.indexOf(Math.min(...arr));
        arr[idx] += customers[i];
    }
    return Math.max(...arr);
}