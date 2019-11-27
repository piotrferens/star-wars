function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getUniqueRandomNumbers(
    count: number,
    limit = 2,
    uniqueRandoms: number[] = []
): number[] {
    const elem = getRandomNumber(1, count)

    if (uniqueRandoms.includes(elem)) {
        return getUniqueRandomNumbers(count, limit, uniqueRandoms)
    } else {
        uniqueRandoms.push(elem)
    }

    if (uniqueRandoms.length === limit) {
        return uniqueRandoms
    }

    return getUniqueRandomNumbers(count, limit, uniqueRandoms)
}
