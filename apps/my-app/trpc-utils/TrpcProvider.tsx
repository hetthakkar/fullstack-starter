import { QueryClientProvider } from '@tanstack/react-query'
import { trpc } from '../client'
import { useClient } from './useClient'
import { ReactNode } from 'react'
import React from 'react'

type Props = {
  children: ReactNode
}

export function TrpcProvider({ children }: Props) {
  const { queryClient, trpcClient } = useClient()

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
