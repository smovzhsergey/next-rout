import React from 'react';
import Link from 'next/link';

const Separator = () => <span> 	&raquo; </span>

const breadCrumbs = ({ route }) => {
  
  // if(route)
  // Object.entries(route).forEach( item => {
  //   if(item[1]) console.log(item[0])
  // })

  return (
    <div>
        <Link href="/" as={`/`}>
          <a>Buki</a>
        </Link>
        <Separator />
        <Link href="/tutors" as={`/tutors`}>
          <a>Tutors</a>
        </Link>
      
    </div>
  )
}

export default breadCrumbs
