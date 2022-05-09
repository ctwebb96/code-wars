const deleteNth = (lst, n) => {
    const seen = new Map()
    return lst.filter(x => {
        const count = seen.get(x) || 0
        if (count >= n) return false
        seen.set(x, count + 1)
        return true
    })
}

//refactor

function deleteNth(arr, x) {
    let cache = {};
    return arr.filter(function(n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;
    });
}