import { useRouter } from 'next/router'
import Link from 'next/link';

import { createLinkTemplate, createPlaceholder } from '../helper';

export const Filters = ({ cb, selectData:[name, options], currentRoute }) => {
  const router = useRouter();
  const { nextLink, prevLink } = createLinkTemplate(name, currentRoute, router);

  const optionsList = options.map( ({alias, name: filterName}, index) => {
    const path = createPlaceholder(name, currentRoute, alias);
    
    const selectedStyle = currentRoute[name] === alias
      ? { display:'block', cursor: 'pointer', backgroundColor: 'blue', color: 'white' }
      : { display:'block', cursor: 'pointer' }

    return (
      <Link key = {index} href = { nextLink } as = { path }>
        <p style = {selectedStyle} onClick = { () => cb({[name]: alias}) }>{ filterName }</p>
      </Link>
    )
  });
  
  return (
    <div style = {{ padding: '20px', height: '200px', overflow: "scroll" }}>

      <h3>Filter { name }</h3>
      
      <Link href = { prevLink } as = { createPlaceholder(name, currentRoute) }>
        <p
          style = {{color:'red', cursor: 'pointer', fontWeight:'bold' }}
          onClick = { () => cb({[name]: ''}) }
        >
          clear { name }
        </p>
      </Link>
      { optionsList }
    </div>
  )
}

export default Filters;
