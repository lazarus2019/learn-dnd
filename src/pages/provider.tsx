import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { PropsWithChildren } from 'react'

const MINUTE = 1000 * 60
const CACHE_TIME = MINUTE * 5
const STALE_TIME = MINUTE * 3

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: CACHE_TIME,
      staleTime: STALE_TIME,
      retry: 0,
    },
  },
})

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
