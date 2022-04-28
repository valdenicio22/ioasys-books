import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { AuthProvider } from 'context/AuthContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <title>Ioasys Books</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AuthProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
