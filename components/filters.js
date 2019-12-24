import { useRouter } from 'next/router'
import Link from 'next/link';

import { createCurrentPath } from '../helper';

export const Filters = ({ cb, selectData:[name, options], currentRoute }) => {
  const router = useRouter();
  
  const createPlaceholder = (filterName, currentRoute, router, option = '') => {
    
    let nextPlaceholder = '';
    let prevPlaceholder = '';
    const asPath = createCurrentPath(currentRoute, name, option);
    
    if (currentRoute[filterName] === '') {
      nextPlaceholder = asPath;
      prevPlaceholder = asPath;
    } else {
      // if (option === '') {
      //   prevPlaceholder = router.asPath.replace(`/${currentRoute[filterName]}`, `${option}`);
      // } else {
      //   prevPlaceholder = 
      // }
      // prevPlaceholder = router.asPath.replace(`/${currentRoute[filterName]}`, '');
      nextPlaceholder = asPath.replace(`${currentRoute[filterName]}`, option);
    }
    return {nextPlaceholder};
  }

  const createLinkTemplate = ( filterName, currentRoute, router ) => {
    let nextLink = '';
    let prevLink = '';

    if (router.pathname === '/tutors') {
      nextLink = `[filter1]/[filter2]`;
      prevLink = `[filter1]`;
    } else {
      const routeIndex = Number(router.pathname.slice(-2, -1));
      
      // if (routeIndex <= 3) {
      //   prevLink = `[filter1]`;
      // } else {
      
      //   const index = router.pathname.length - router.pathname.lastIndexOf('/[')
      //   prevLink = router.pathname.slice(0, index)
      // }
      
      if ( currentRoute[filterName] !== '' ) {
        prevLink = `[filter1]`;
      } else {
        // prevLink = `[filter1]/[filter2]`
        const index = router.pathname.length - router.pathname.lastIndexOf('/[')
        prevLink = router.pathname.slice(0, index)
      }

      nextLink = currentRoute[filterName] !== ''
        ? router.pathname
        : `${router.pathname}/[filter${routeIndex+1}]`;
    }

    return {nextLink, prevLink};
  }

  const { nextLink, prevLink } = createLinkTemplate(name, currentRoute, router);
  // console.log('prevLink', prevLink)
  // console.log('prevPlaceholder', createPlaceholder(name, currentRoute, router).prevPlaceholder)
  
  return (
    <div style = {{ padding: '20px', height: '200px', overflow: "scroll" }}>

      <h3>Filter { name }</h3>
      
      <Link href = { prevLink } as = { createPlaceholder(name, currentRoute, router).nextPlaceholder }>
        <a
          style = {{color:'red', fontWeight:'bold' }}
          onClick = { () => cb({type: name, value: ''}) }>
            clear { name }
          </a>
      </Link>
      {
        options.map( ({alias, name: filterName}, index) => {
          const path = createPlaceholder(name, currentRoute, router, alias).nextPlaceholder;
          
          const selectedStyle = currentRoute[name] === alias
            ? { display:'block', backgroundColor: 'blue', color: 'white' }
            : { display:'block' }
          return (
            <Link key = {index} href = { nextLink } as = { path }>
              <a style = {selectedStyle} onClick = { () => cb({[name]: alias}) }>{ filterName }</a>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Filters;
