import {useRouter} from 'next/router'
import Link from 'next/link';

export const Filters = ({ cb, selectData:[name, options], nextlink, currentRoute }) => {

  const router = useRouter();

  const createPath = (filterName, currentRoute, router, option) => {
    let placeholder = '';

    if (currentRoute[filterName] === '') {
      // placeholder = router.asPath
      placeholder = `${ router.asPath }/${ option }`
      
    } else {
      placeholder = router.asPath.replace(`${currentRoute[filterName]}`, option);
    }
    return placeholder;
  }

  const createLinkTemplate = ( filterName, currentRoute, router ) => {
    let link = '';

    if (router.pathname === '/tutors') {
      link = `[filter1]/[filter2]`;
    } else {
      const routeIndex = Number(router.pathname.slice(-2, -1));
      
      link = currentRoute[filterName] !== ''
        ? router.pathname
        : `${router.pathname}/[filter${routeIndex+1}]`;
    }

    return link;
  }

  const link = createLinkTemplate(name, currentRoute, router)
  
  return (
    <div style = {{ padding: '20px' }}>

      <h3>Filter { name }</h3>
      
      <Link href = { link } as = {`${ router.asPath }`}>
        <p
          style = {{color:'red', fontWeight:'bold' }}
          onClick = { () => cb({type: name, value: ''}) }>
            clear { name }
          </p>
      </Link>
      {
        options.map( (option, index) => {
          const path = createPath(name, currentRoute, router, option)
          return (
            <Link key = {index} href = { link } as = { path }>
              <p style = {{display:'block' }} onClick = { () => cb({[name]: option}) }>{ option }</p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Filters;
