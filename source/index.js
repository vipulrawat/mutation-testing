const largestPossibleNumber = (a) => {
    return +(a.sort((x, y) => +("" + y + x) - +("" + x + y)).join(''))
}

module.exports = largestPossibleNumber
