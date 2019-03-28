import counter from '../counter'

describe('counter reducer', () => {
    it('should have a default state', () => {
        const action = { type: '', count: 0 }
        const expectedReturn = { count: 0 }
        expect(counter(undefined, action)).toEqual(expectedReturn)
    })
})