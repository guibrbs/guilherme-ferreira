import type { NextPage } from 'next'
import { MainContent } from '../components/MainContent'
import { Banner } from '../components/Banner'
import { CuriositySection } from '../components/CuriositySection'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <MainContent />
      <CuriositySection />
      <Banner homepage={true}/>
    </Layout>
  )
}

export default Home
