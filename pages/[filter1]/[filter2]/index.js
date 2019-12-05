import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../components/layout'
import TutorsBoard from '../../../components/tutorsBoard'

const Filter2 = () => {

  const router = useRouter()
  const { filter1, filter2, filter3 } = router.query;
  
  return (
    <Layout>
      <h1>{router.asPath}</h1>
      <TutorsBoard />
    </Layout>
  )
}
Filter2.getInitialProps = () => {
  return {}
}
export default Filter2;