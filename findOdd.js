function findOdd(arr) {
    for(let i = 0; i < arr.lentgh; i++){
        const count = arr.filter(value => value === arr[i]).length;
        if(count % 2 == 1){
            return arr[i];
        }
    }
    return -1;
}

//refactor

const findOdd = (xs) => xs.reduce((a, b) => a ^ b)