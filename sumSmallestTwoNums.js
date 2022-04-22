function sumTwoSmallestNumbers(numbers) {
    let nums = numbers.sort(function (a, b) {
        return a - b
    })
    return nums[0] + nums[1]
}