import Link from 'next/link'

console.log('re-rerender Header!!!!!!!!!!!!!!!!!!!!')

const Header = () => (
  <header>
    
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/tutors">
          <a>Tutors</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
