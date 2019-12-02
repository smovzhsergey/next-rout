export const createLink = ( name, path, router, currentFilter = {city: 'Lviv'} ) => {

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


const  getVal = (name) => localStorage.getItem(name);

export { getVal }
