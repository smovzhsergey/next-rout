import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../../components/layout'

const Filter3 = () => {

  const router = useRouter()
  
  return (
    <Layout>
      <h1>{router.asPath}</h1>
    </Layout>
  )
}

export default Filter3;