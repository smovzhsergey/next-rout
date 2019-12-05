import {useRouter} from 'next/router'
import Link from 'next/link';

export const Filters = ({ cb, selectData:[name, options], nextlink }) => {

  const router = useRouter();

  const routeIndex = Number(router.pathname.slice(-2, -1));  // (:|)
    const { filter1, filter2, filter3, filter4, filter5, filter6 } = router.query;
    const link =  router.pathname === '/tutors'
    ? `[filter]/[filter2]`
    : `${router.pathname}/[filter${routeIndex+1}]`;
  
  return (
    <div style = {{ padding: '20px' }}>

      <h3>Filter { name }</h3>
      <p>
        <Link href={nextlink} as={`${router.asPath}`}>
          <a  onClick = { () => cb({ [name]:null }) }>*** CLEAR ***</a>
        </Link>
      </p>
      {
        options.map( (option, index) => (
          <p key = {index}>
            <Link href = { link } as = {`${ router.asPath }/${ option }`}>
              <a onClick = { () => cb(name, option) }>{ option }</a>
            </Link>
          </p>
        ))
      }
    </div>
  )
}

export default Filters;
