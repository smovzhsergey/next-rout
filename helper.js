const  getFilters = () => {
  
  const data = localStorage.getItem('filters');
  
  return data
          ? JSON.parse(data)
          : {
            subject: null,
            city: null,
            district: null,
            level: null,
          };
};

const  getSelected = () => {
  const data = localStorage.getItem('selectedFilter');
  
  return (data ? data : null)
};

const  isSelected = () => {
  const data = localStorage.getItem('isNewFilter');
  
  return (data === null ? true : data)
};

const createLinkTemplate = (router, isNewFilter) => {
  let link;
  
  if (!isNewFilter) {
    console.log(router.pathname);
    
    link = router.pathname;
  } else {
    const routeIndex = Number(router.pathname.slice(-2, -1));  // (:|)
    link =  router.pathname === '/tutors'
    ? `[filter1]/[filter2]`
    : `${router.pathname}/[filter${routeIndex+1}]`;
  }
  
  return link;
}

const createLinkPlaceholder = (router, filters, selectedFilter) => {

  console.log(filters)
  let oldValue = filters[selectedFilter];
}

const createLink = ( name, path, router, currentFilter = {city: 'Lviv'} ) => {

  // data from filter:
    // name => filter type:'subject', 'location', 'level' ....
    // path => filter value: 'math', 'italian', 'english' ....

  // path before filter selecting 
  let oldValue = localStorage.getItem(name);
  
  // set new path
  localStorage.setItem(`${name}`, path);

  // if filter existing
  if (oldValue) {
    let url;
    // if value from select = '' or undefined
    if (path === "") {
      localStorage.removeItem(name);
      oldValue =  '/'+oldValue;
      url = router.asPath.replace(oldValue, '');
    } else {
      url = router.asPath.replace(oldValue, path);
    }

    return url;

  } else {
    // if filter isn't existing
    return `${router.asPath}/${path}`
  }
}




export { getFilters, getSelected, isSelected, createLink, createLinkTemplate, createLinkPlaceholder}
