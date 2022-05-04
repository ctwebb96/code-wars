function sumDigPow(a, b) {
    let eureka = [];
    for( i = a; i <= b; i++){
        let digits = String(i).split('');
        if( i == digits.reduce(function(acc, cv, ci){
            return acc + cv**(ci+1);
        }, 0)){
            eureka.push(i);
        }
    }
    return eureka;
}