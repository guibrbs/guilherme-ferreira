import Head from "next/head"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"
import { Projects } from '../../components/Projects/index'

const Slug = () => {
  const route = useRouter()
  const {slug} = route.query

  return (
    <Layout>
      <Head>
        <title> {slug} | Guilherme Ferreira</title>
      </Head>
      <Projects />
    </Layout>
  )
}

export default Slug