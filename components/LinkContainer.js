import Link from 'next/link';
import { useRouter } from 'next/router';
import { createCurrentPath } from '../helper';

const popularCities = [4067,10281,2759,7200,5023,2021,10520,10547,6329,2949]
const popularSubjects = [8,10,13,19,9,11,14,21,22,50]
const popularLevels = [5,6,7,14,22,23,24,43,42,48]

const LinkContainer = ({currentRoute, towns, subjects, levels}) => {
  // createCurrentPath(currentRoute, name, option)
  const selectedFielters = Object.entries(currentRoute).reduce((acc, [name, value]) => {
    if (value !== '') {
      return [...acc, name];
    }
    
    return acc;
  }, [])

  // const createLinksBlock = (arr, obj) => arr.map(item => obj[item]);
  // const citiesArr = createLinksBlock(popularCities, towns)
  // const subjectsArr = createLinksBlock(popularSubjects, subjects)
  // const levelsArr = createLinksBlock(popularLevels, levels)
  
  
  // console.log(currentRoute)
  
  const createList = (arrayOfPoular, objectOfOptions, filterType) => {

    const options = arrayOfPoular.map(item => objectOfOptions[item]);

    return options.map((item, index) => {
      const placeholder = createCurrentPath(currentRoute, filterType, item.alias);
      // console.log(placeholder);
      
      return (
        <Link key = {index} href = { '/[filter1]/[filter2]' } as = { placeholder }>
          <a style = {{ display:'block' }} onClick = { () => cb({[name]: alias}) }>Репетитор { item.name }</a>
        </Link>
      )
    })
  }

  let filterType = 'subject'
  // let array = subjectsArr

  const list = createList(popularCities, towns, filterType);
  
  return (
    <section>
      <h1 style = {{ textAlign: 'center', fontSize: '3rem' }}>Швидкі посилання</h1>
      <ul>
        { list }
      </ul>
    </section>
  )
}

export default LinkContainer