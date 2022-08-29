const {shuffleArray} = require('./utils')
describe('shuffleArray', () => {
    const dummyArr = [1, 2, 3]
    const value = shuffleArray(dummyArr)
    it('returns an array', () => {
        expect(Array.isArray(value)).toBeTruthy()
    })
    it('returns an array that is the same length as the argument sent in', () => {
        expect(value.length).toEqual(dummyArr.length)
    })
})