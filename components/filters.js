import {useRouter} from 'next/router'
import Link from 'next/link';

export const Filters = ({ cb, selectData:[name, options], nextlink }) => {

  const router = useRouter();
  const { filter1, filter2, filter3, filter4, filter5, filter6 } = router.query;
  
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
            <Link href = { nextlink } as = {`${ router.asPath }/${ option }`}>
              <a onClick = { () => cb(name, option) }>{ option }</a>
            </Link>
          </p>
        ))
      }
    </div>
  )
}

export default Filters;
