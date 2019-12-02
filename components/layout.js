import Head from 'next/head';
import Header from './header';
import {useRouter} from 'next/router'
import FilterPanel from './filterPanel'

import {createLink} from '../helper'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => {

  const fields = {
    subjects: ['subject', ['english', 'math', 'italian', 'biology']],
    cities: ['city', ['Kyiv', 'Lviv', 'Dnipro', 'Kharkiv', 'Odessa']],
    districts: ['district', ['District1', 'District2', 'District3', 'District4', 'District5']],
    levels: ['level', ['low', 'medium', 'high', 'superStar']],
  }
  
  const router = useRouter();

  const changeRoute = (name, path) => {  
    
    const newRoute = createLink(name, path, router)
    
    router.push(newRoute)
  }

return(
  <div style={layoutStyle}>
    <Head>
      <title>{"Dynamic router"}</title>
      <meta name="keywords" content={"keyword, keyword, keyword"} />
      <meta name="description" content={"Some description about current page"} />
    </Head>
    <Header />
    <FilterPanel
      fields = { fields }
      cb = { changeRoute }
    />
    {props.children}
  </div>
)}


export default Layout;