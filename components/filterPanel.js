import Filter from './filters';

const filterPanel = ({cb, levels, subjects, towns, currentRoute}) => {
  
  return (
    <div style = {{display: 'flex'}}>
      <Filter selectData = { subjects } cb = { cb } currentRoute = {currentRoute}/>
      <Filter selectData = { levels } cb = { cb } currentRoute = {currentRoute}/>
      <Filter selectData = { towns } cb = { cb } currentRoute = {currentRoute}/>
    </div>
  )
}

export default filterPanel;
