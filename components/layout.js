import Head from 'next/head';
import Header from './header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => {

return(
  <div style={layoutStyle}>
    <Head>
      <title>{"Dynamic router"}</title>
      <meta name="keywords" content={"keyword, keyword, keyword"} />
      <meta name="description" content={"Some description about current page"} />
    </Head>
    <Header />
    {props.children}
  </div>
)}


export default Layout;
