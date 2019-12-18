import Link from 'next/link';

const LinkContainer = ({currentLink}) => {
  
  const findSelectedField = (obj) => {

    // const selected = []

    // for (let item of Object.entries(obj)) {
    //   if (item[1]) selected.push(item[0])
    // }
    
    // return selected;

    return Object.entries(obj).reduce( (acc, item) => acc + ( item[1] ? `/${item[0]}` : '' ), '' );

  }

  const selectedField = findSelectedField(currentLink);
  // console.log(selectedField);
  
  
  // let template;

  // switch (selectedField) {
    
  //   case (['subject']):
  //     console.log('must be cities')
  //     break;
  
  //   case (['city']):
  //     console.log('must be subjects')
  //     break;
  
  //   case (['subjects','city']):
  //     console.log('must be levels of subjects')
  //     console.log('**************************************************************')
  //     console.log('must be districts of cities')
  //     break;
  
  //   default:
  //     console.log('WTF!!!!!!!!!!!!!!!!!!!');
      
  //     break;
  // }



  return (
    <section>
      <h1 style = {{ textAlign: 'center', fontSize: '3rem' }}>Швидкі посилання</h1>
    </section>
  )
}

export default LinkContainer