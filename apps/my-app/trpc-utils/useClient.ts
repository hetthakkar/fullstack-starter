import { QueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { trpc } from '../client'
import SuperJSON from 'superjson'
import { createWSClient, httpBatchLink, splitLink, wsLink } from '@trpc/react-query'

const SERVER_URL = "192.168.0.247:3434/trpc";

const wsClient = createWSClient({
  url: `ws://${SERVER_URL}`,
})

export function useClient() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        splitLink({
          condition(op) {
            return op.type === 'subscription';
          },
          true: wsLink({
            client: wsClient,
          }),
          false: httpBatchLink({
            url: `http://${SERVER_URL}`,
          }),
        })
        // httpBatchLink({
        //   url: `http://${SERVER_URL}`,
        // }),
      ],
      transformer: SuperJSON,
    })
  )

  return {
    queryClient,
    trpcClient,
  }
}