var number = function (busStops) {
    let people = 0
    busStops.forEach(stops => people = people + stops[0] - stops[1])
    return people
}


// refactored

const number = (busStops) => busStops.reduce((people, [on, off]) => people + on - off, 0)