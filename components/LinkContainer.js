import Link from 'next/link';
import { useRouter } from 'next/router';
import { createLinkTemplate, createPlaceholder } from '../helper';

const popularCities = [4067,10281,2759,7200,5023,2021,10520,10547,6329,2949];
const popularSubjects = [8,10,13,19,9,11,14,21,22,50];
const popularLevels = [5,6,7,14,22,23,24,43,42,48];

const LinkContainer = ({currentRoute, towns, subjects, levels, cb}) => {
  const router = useRouter();

  const selectedFielters = Object.entries(currentRoute).reduce((acc, [name, value]) => {
    if (value !== '') {
      return [...acc, name];
    }
    
    return acc;
  }, []);
  
  const createList = (arrayOfPopular, objectOfOptions, filterType) => {

    const options = arrayOfPopular.map(item => objectOfOptions[item]);

    return options.map(({ alias, name }) => {

      const placeholder = createPlaceholder(filterType, currentRoute, alias);
      const { nextLink } = createLinkTemplate(filterType, currentRoute, router);
      const innerText = `Репетитор з ${ name }`
      return (
        <Link key = {`${name}_${alias}`} href = { nextLink } as = { placeholder }>
          <a style = {{ display:'block' }} onClick = { () => cb({[filterType]: name}) }>{ innerText }</a>
        </Link>
      )
    });
  }

  
  let filterType = 'level';
  let arrayOfPopular = popularLevels;
  let objectOfOptions = levels;
  
  if (selectedFielters.length === 0 ) {
    filterType = 'subject';
    arrayOfPopular = popularSubjects;
    objectOfOptions = subjects;
  } else if (selectedFielters.length === 1 && selectedFielters.some( i => i ==='subject') && !selectedFielters.some( i => i ==='city')) {
    filterType = 'city';
    arrayOfPopular = popularCities;
    objectOfOptions = towns;
  } else if (selectedFielters.length === 1 && selectedFielters.some( i => i ==='city') && !selectedFielters.some( i => i ==='subject')) {
    filterType = 'subject';
    arrayOfPopular = popularSubjects;
    objectOfOptions = subjects;
  }

  const list = createList(arrayOfPopular, objectOfOptions, filterType);
  
  return (
    <section>
      <h1 style = {{ textAlign: 'center', fontSize: '3rem' }}>Швидкі посилання</h1>
      <div style = {{display: 'flex'}}>
        { 
          !selectedFielters.some( i => i ==='subject') &&
          <div>
            <h3>Популярні предмети</h3>
            {createList(popularSubjects, subjects, 'subject')}
          </div>
        }
        { 
          !selectedFielters.some( i => i ==='city') &&
          <div>
            <h3>Популярні міста</h3>
            {createList(popularCities, towns, 'city')}
          </div>          
        }
        { 
          (!selectedFielters.some( i => i ==='level')) &&
          <div>
            <h3>Популярні рівні</h3>
            { createList(popularLevels, levels, 'levels') }
          </div>
        }
      </div>
    </section>
  )
}

export default LinkContainer