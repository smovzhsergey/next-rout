import Filter from './filters';

const filterPanel = ({cb, nextlink, fields: {cities, districts, levels, subjects}}) => {
  
  return (
    <div style ={{display: 'flex'}}>
      <Filter nextlink = {nextlink } selectData = { subjects } cb = { cb } />
      <Filter nextlink = {nextlink } selectData = { levels } cb = { cb } />
      <Filter nextlink = {nextlink } selectData = { cities } cb = { cb } />
      <Filter nextlink = {nextlink } selectData = { districts } cb = { cb } />
    </div>
  )
}

export default filterPanel;
