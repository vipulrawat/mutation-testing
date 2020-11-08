const { expect } = require('@jest/globals')
const { describe } = require('yargs')
const largestPossibleNumber = require('../index')

it('should test the largest possible number', () => {
    const set = [2,4,1]

    expect(largestPossibleNumber(set)).toBe(421)
})
