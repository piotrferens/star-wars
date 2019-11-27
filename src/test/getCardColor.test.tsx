import { getCardColor, colors } from '../utils/getCardColor'

describe('getCardColor', () => {
    it('sets winner color', () => {
        expect(getCardColor('left', 'left')).toEqual(colors.win)
    })

    it('sets loser color', () => {
        expect(getCardColor('right', 'left')).toEqual(colors.lose)
    })

    it('sets draw color', () => {
        expect(getCardColor('draw', 'left')).toEqual(colors.draw)
    })
})
