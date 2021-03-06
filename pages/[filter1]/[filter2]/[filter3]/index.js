import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../../components/layout'
import TutorsBoard from '../../../../components/tutorsBoard'

const Filter3 = () => {

  const router = useRouter()
  
  return (
    <Layout>
      <h1>{router.asPath}</h1>
      <TutorsBoard />
    </Layout>
  )
}
Filter3.getInitialProps = () => {
  return {}
}
export default Filter3;