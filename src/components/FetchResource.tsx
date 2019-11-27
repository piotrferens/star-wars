import React from 'react'
import useSWR from 'swr'

import { ErrorMessage } from './ErrorMessage'
import { PlaygroundSkeleton } from './skeletons/PlaygroundSkeleton'

interface Props {
    children(data: { count: number }): React.ReactNode
    url: string
}

export function FetchResource({ children, url }: Props) {
    const { data, error, revalidate, isValidating } = useSWR(url)

    if (error && !isValidating) {
        return (
            <ErrorMessage onRetryClick={revalidate} text="There was a problem with swapi.co 😢." />
        )
    }

    return <>{data ? children(data) : <PlaygroundSkeleton />}</>
}
