function past(h, m, s) {
    let convertHours = h * 60 * 60 * 1000;
    let convertMinutes = m * 60 * 1000;
    let convertSeconds = s * 1000;
    let time = convertHours + convertMinutes + convertSeconds
    return time

}