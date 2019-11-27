import { ConfigInterface } from 'swr'

const fetcher = (requestInfo: RequestInfo, requestInit?: RequestInit) => {
    return fetch('https://swapi.co/api' + requestInfo, requestInit).then(res => {
        if (res.status >= 400) {
            throw new Error('Failed to fetch')
        }
        return res.json()
    })
}

export const swrConfig: ConfigInterface = {
    fetcher,
    errorRetryInterval: 0,
    shouldRetryOnError: false,
    revalidateOnFocus: false
}
