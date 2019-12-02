import { useRouter } from 'next/router'
import Layout from '../components/layout'
import FilterPanel from '../components/filterPanel'
import TutorsList from '../components/tutorsList'

const subjects = ['english', 'math', 'italian', 'biology'];
const cities = ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odessa'];
const levels = ['low', 'medium', 'high', 'superStar'];

const Tutors = () => {

  // const router = useRouter();

  // const changeRoute = (path) => {
  //   router.push(`${router.asPath}/${path}`)
  // }

  return(

    <Layout>
      <h1>All tutors page</h1>
      <section>
        {/* <FilterPanel
          subjects = {subjects}
          cities = {cities}
          levels = {levels}
          cb = {changeRoute}
        /> */}
        <TutorsList />
      </section>
    </Layout>

  )
}
export default Tutors
