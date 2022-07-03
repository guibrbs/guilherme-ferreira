import '../styles/globals.css'
import "@fontsource/exo/latin.css"
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme='light' attribute="class">
      <div className='flex flex-col h-screen justify-between'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
