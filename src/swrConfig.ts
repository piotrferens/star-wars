import { ConfigInterface } from "swr"

const fetcher = (requestInfo: RequestInfo, requestInit?: RequestInit) =>
  fetch("https://swapi.co/api" + requestInfo, requestInit).then(res =>
    res.json()
  )

export const swrConfig: ConfigInterface = {
  fetcher
}
