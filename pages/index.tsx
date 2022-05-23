import type { NextPage } from 'next'
import { MainContent } from '../components/MainContent'
import { Banner } from '../components/Banner'
import { CuriositySection } from '../components/CuriositySection'
import { Form } from '../components/Form'
import Layout from '../components/Layout'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Guilherme Ferreira</title>
      </Head>
      <MainContent />
      <CuriositySection />
      <Banner homepage={true}/>
      <Form />
    </Layout>
  )
}

export default Home
