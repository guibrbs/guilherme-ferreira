import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { MainContent } from '../components/MainContent'
import { Banner } from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Banner />
    </div>
  )
}

export default Home
