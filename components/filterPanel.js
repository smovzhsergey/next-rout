import Filter from './filters';

const filterPanel = ({cb, fields: {cities, districts, levels, subjects}, currentRoute}) => {
  
  return (
    <div style ={{display: 'flex'}}>
      <Filter selectData = { subjects } cb = { cb } currentRoute = {currentRoute}/>
      <Filter selectData = { levels } cb = { cb } currentRoute = {currentRoute}/>
      <Filter selectData = { cities } cb = { cb } currentRoute = {currentRoute}/>
      <Filter selectData = { districts } cb = { cb } currentRoute = {currentRoute}/>
    </div>
  )
}

export default filterPanel;
