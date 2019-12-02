import { useRouter } from 'next/router'
import Layout from '../components/layout'
import TutorsBoard from '../components/tutorsBoard'

const Tutors = () => {

  return(

    <Layout>
      <h1>All tutors page</h1>
      <section>
        <TutorsBoard />
      </section>
    </Layout>

  )
}
export default Tutors
