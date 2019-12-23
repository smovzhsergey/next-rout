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
  for (const route of routes) {
    filters.forEach(([name, data]) => { // exit from loop if (field.alias === route)
      for (const field of data ) {
        if (field.alias === route )  {
          currentRoute[name] = field.alias
        }
      }
    });
  }

  return currentRoute;
}



const createCurrentPath = (currentRoute) => {
  
  return Object.entries(currentRoute).reduce((acc, item) => {
    if (item[1]) {
      return `${acc}/${item[1]}`;
    }

    return acc;
  }, '/tutors')
}


export { createCurrentPath, createFilterList, createCurrentRoute }