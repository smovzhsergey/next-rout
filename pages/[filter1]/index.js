import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import TutorsBoard from '../../components/tutorsBoard'

const Filter1 = () => {

  const router = useRouter()
  const { filter1, filter2 } = router.query;
  
  return (
    <Layout>
      <h1>{router.asPath}</h1>
      <TutorsBoard/>
    </Layout>
  )
}

export default Filter1;