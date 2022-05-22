import type { NextPage } from 'next'
import { MainContent } from '../components/MainContent'
import { Banner } from '../components/Banner'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <MainContent />
      <Banner homepage={true}/>
    </Layout>
  )
}

export default Home
