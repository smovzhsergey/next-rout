import Header from '../components/header'
import Filter from '../components/filters'

const subjects = ['english', 'math', 'italian', 'biology']
const levels = ['low', 'medium', 'high', 'superStar']

const Tutors = () => (
  <>
    <Header />
    <h1>All tutors page</h1>
    <Filter options = { subjects }/>
    <Filter options = { levels }/>
  </>
)

export default Tutors
