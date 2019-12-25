import { useRouter } from 'next/router'
import Link from 'next/link';

import { createCurrentPath } from '../helper';

export const Filters = ({ cb, selectData:[name, options], currentRoute }) => {
  const router = useRouter();

  const createPlaceholder = (filterName, currentRoute, option = '') => {
    
    const asPath = createCurrentPath(currentRoute, name, option);
    
    const placeholder = currentRoute[filterName] === ''
      ? asPath
      : asPath.replace(`${currentRoute[filterName]}`, option);

    return placeholder;
  }

  const createLinkTemplate = ( filterName, currentRoute, router ) => {
    let nextLink = '';
    let prevLink = '';

    if (router.pathname === '/tutors') {
      nextLink = `[filter1]/[filter2]`;
      prevLink = `[filter1]`; //  or /tutors
    } else {
      const routeIndex = Number(router.pathname.slice(-2, -1)); // find index last filter
      const lengthOfRoute = router.pathname.length - router.pathname.lastIndexOf('/[');

      prevLink = currentRoute[filterName] === '' 
        ? router.pathname
        : router.pathname.slice(0, -lengthOfRoute)

      nextLink = currentRoute[filterName] !== ''
        ? router.pathname
        : `${router.pathname}/[filter${routeIndex+1}]`;
    }

    return {nextLink, prevLink};
  }

  const { nextLink, prevLink } = createLinkTemplate(name, currentRoute, router);
  
  return (
    <div style = {{ padding: '20px', height: '200px', overflow: "scroll" }}>

      <h3>Filter { name }</h3>
      
      <Link href = { prevLink } as = { createPlaceholder(name, currentRoute) }>
        <p
          style = {{color:'red', fontWeight:'bold' }}
          onClick = { () => cb({type: name, value: ''}) }>
            clear { name }
          </p>
      </Link>
      {
        options.map( ({alias, name: filterName}, index) => {
          const path = createPlaceholder(name, currentRoute, alias);
          
          const selectedStyle = currentRoute[name] === alias
            ? { display:'block', cursor: 'pointer', backgroundColor: 'blue', color: 'white' }
            : { display:'block', cursor: 'pointer' }
          return (
            <Link key = {index} href = { nextLink } as = { path }>
              <p style = {selectedStyle} onClick = { () => cb({[name]: alias}) }>{ filterName }</p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Filters;
