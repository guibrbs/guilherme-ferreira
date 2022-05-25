import Head from "next/head"
import Layout from "../components/Layout"
import { About } from '../components/About'

function Sobre() {
  return (
    <Layout>
      <Head>
        <title>Sobre | Guilherme Ferreira</title>
      </Head>
      <About />
    </Layout>
  )
}

export default Sobre
