import { useRouter } from 'next/router'
import Layout from '../components/layout'
import TutorsBoard from '../components/tutorsBoard'


const Tutors = (props) => {
  console.log('tutors props', props)
  return(

    <Layout>
      <h1>All tutors page</h1>
      <section>
        <TutorsBoard />
      </section>
    </Layout>

  )
}

Tutors.getInitialProps = async (ctx) => {

  console.log(ctx)
  const query = await new Promise((resolve) => {
    setTimeout(() => {resolve(ctx)}, 200)
  }); 


  return {name: 'name', val: query, lastName: 'lastName' }
}

export default Tutors;
