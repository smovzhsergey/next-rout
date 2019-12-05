import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../../../components/layout'
import TutorsBoard from '../../../../components/tutorsBoard'

const Filter3 = () => {

  const router = useRouter()
  const { filter1, filter2, filter3, filter4, filter5, filter6 } = router.query;
  console.log(filter1);
  console.log(filter2);
  console.log(filter3);
  console.log(filter4);
  console.log(filter5);
  console.log(filter6);
  
  return (
    <Layout>
      <h1>{router.asPath}</h1>
      <TutorsBoard />
    </Layout>
  )
}

export default Filter3;