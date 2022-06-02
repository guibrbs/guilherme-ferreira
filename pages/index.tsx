import type { NextPage } from 'next'
import { MainContent } from '../components/MainContent'
import { Banner } from '../components/Banner'
import { CuriositySection } from '../components/CuriositySection'
import { Form } from '../components/Form'
import Layout from '../components/Layout'
import Head from 'next/head'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isToForm, setIsToForm] = useState(false)
  return (
    <Layout>
      <Head>
        <title>Home | Guilherme Ferreira</title>
      </Head>
      <MainContent setIsToForm={setIsToForm} />
      <CuriositySection />
      <Banner homepage={true}/>
      <Form isToForm={isToForm}/>
    </Layout>
  )
}

export default Home
