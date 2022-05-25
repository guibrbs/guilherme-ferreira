import Head from "next/head"
import Layout from "../components/Layout"
import { Projects } from '../components/Projects'

function Sobre() {
  return (
    <Layout>
      <Head>
        <title>Sobre | Guilherme Ferreira</title>
      </Head>
      <Projects />
    </Layout>
  )
}

export default Sobre
