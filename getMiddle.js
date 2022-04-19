function getMiddle(s) {
    let str = s.length
    let position
    let length

    if (str % 2 === 1) {
        position = str / 2;
        length = 1
    } else {
        position = str / 2 - 1;
        length = 2
    }

    return s.substring(position, position + length)
}

//refactor

function getMiddle(s)
{
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}