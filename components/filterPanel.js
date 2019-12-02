import Filter from './filters';

const filterPanel = ({cb, fields: {cities, districts, levels, subjects}}) => {
  
  return (
    <div style ={{display: 'flex'}}>
      <Filter selectData = { subjects } cb = { cb } />
      <Filter selectData = { levels } cb = { cb } />
      <Filter selectData = { cities } cb = { cb } />
      <Filter selectData = { districts } cb = { cb } />
    </div>
  )
}

export default filterPanel;
