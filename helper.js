const createFilterList = (name, list) => {
  return [name, Object.values(list).map(({ alias, name }) => ({ alias, name }))];
};

const createCurrentRoute = (url, ...filters) => {

  const routes = url.split('/').splice(2); // parse url splice(2) - remove '/', 'tutors'
  const currentRoute = {
    subject: '',
    city: '',
    district: '',
    level: '',
    from: '',
    to: '',
    sex: '',
    sortBy: '',
  }
  // if ('rates') not alias, id!!!
  // for (const route of routes) {
  //   filters.forEach(([name, data]) => { // exit from loop if (field.alias === route)
  //     for (const field of data ) {
  //       if (field.alias === route )  {
  //         currentRoute[name] = field.alias
  //       }
  //     }
  //   });
  // }
  console.time('loop');
  
  for (const route of routes) {
    let find = false;

    for (const filter of filters) {
      const [ name, data ] = filter;

      for (const field of data ) {
        if (field.alias === route ) {
          currentRoute[name] = field.alias;
          find = true;
          break;
        }
      }

      if (find) break;
    }

  //   filters.forEach(([name, data]) => { // exit from loop if (field.alias === route)
      
      
  //     for (const field of data ) {
    
  //       if (field.alias === route )  {

  //         currentRoute[name] = field.alias;
  //         find = true;
  //         break;
  //       }
  //     }
  //   });

  //   if (find) {
  //     break
  //   }
  }
  // }
  console.timeEnd('loop')

  return currentRoute;
}



const createCurrentPath = (currentRoute, filterName, title) => {
  const nextPath = { ...currentRoute, [filterName]: title }

  return Object.entries(nextPath).reduce((acc, item) => {
    if (item[1]) {
      return `${acc}/${item[1]}`;
    }

    return acc;
  }, '/tutors')
}


export { createCurrentPath, createFilterList, createCurrentRoute }