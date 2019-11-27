export const colors = {
    draw: '#ef6c00',
    win: '#2e7d32',
    lose: '#d50000'
}

export function getCardColor(winner: 'draw' | 'left' | 'right', side: 'left' | 'right') {
    return winner === 'draw' ? colors.draw : side === winner ? colors.win : colors.lose
}
