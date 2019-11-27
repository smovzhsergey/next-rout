import React from 'react'

export const Filters = ({ options }) => {
  return (
    <div>
      <select style = {{margin: '20px', borderBottom: '2px solid gray'}}>
        {  
          options.map( (option, index) => <option key = { index } value = { index }>{`Option ${option}`}</option>)
        }
      </select>
    </div>
  )
}

export default Filters;
