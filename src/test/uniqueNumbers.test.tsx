import { getUniqueRandomNumbers } from '../utils/uniqueNumbers'

describe('getUniqueRandomNumbers', () => {
    it('sets random number', () => {
        const [firstNumber, secondNumber] = getUniqueRandomNumbers(2)
        expect(firstNumber).not.toEqual(secondNumber)
    })
})
