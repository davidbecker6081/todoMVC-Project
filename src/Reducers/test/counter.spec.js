import counter from '../counter'

describe('counter reducer', () => {
    it('should have a default state', () => {
        const action = { type: '', count: 0, isIncrementing: false, isDecrementing: false }
        const expectedReturn = { count: 0, isIncrementing: false, isDecrementing: false }
        expect(counter(undefined, action)).toEqual(expectedReturn)
    })
})