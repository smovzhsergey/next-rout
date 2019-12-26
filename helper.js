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
  }
  
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

const createPlaceholder = (filterName, currentRoute, option = '') => {
    
  const asPath = createCurrentPath(currentRoute, filterName, option);
  
  const placeholder = currentRoute[filterName] === ''
    ? asPath
    : asPath.replace(`${currentRoute[filterName]}`, option);

  return placeholder;
}

const createLinkTemplate = ( filterName, currentRoute, router ) => {
  let nextLink = '';
  let prevLink = '';

  if (router.pathname === '/tutors') {
    nextLink = `[filter1]/[filter2]`;
    prevLink = `[filter1]`; //  or /tutors
  } else {
    const routeIndex = Number(router.pathname.slice(-2, -1)); // find index last filter
    const lengthOfRoute = router.pathname.length - router.pathname.lastIndexOf('/[');

    prevLink = currentRoute[filterName] === '' 
      ? router.pathname
      : router.pathname.slice(0, -(lengthOfRoute))

    nextLink = currentRoute[filterName] !== ''
      ? router.pathname
      : `${router.pathname}/[filter${routeIndex+1}]`;
  }

  return {nextLink, prevLink};
}


export {
  createCurrentPath,
  createCurrentRoute,
  createFilterList,
  createLinkTemplate,
  createPlaceholder
}