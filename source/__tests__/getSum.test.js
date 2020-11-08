const { expect } = require('@jest/globals')
const getSum = require('../sum')

// false test or wrong asseration
it('should give the sum', () => {
    const result = getSum(1, 0)

    expect(result).toBe(1)
})
