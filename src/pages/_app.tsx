import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import * as React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  )
}
export default MyApp
