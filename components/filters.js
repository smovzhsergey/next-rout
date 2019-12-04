import React, { useState, useEffect } from 'react'

import {getVal} from '../helper'

export const Filters = ({ cb, selectData:[name, options] }) => {

  const [selectedItem, setSelectedItem] = useState()

  useEffect(() => {
    setSelectedItem(getVal(name)); 
  }, [selectedItem]);
  
  return (
    <div>
      <select
        name = { name }
        style = {{margin: '20px', borderBottom: '2px solid gray'}}
        onChange = { (e) => cb(e.target.name, e.target.value) } // filter name and filter value
      >
        <option value = "" selected = { !selectedItem }> -- select an { name } -- </option>
        {  
          options.map( (option, index) => (
            <option key = { index } value = { option } selected = { option === selectedItem }>
                {option}
            </option>)
          )
        }
      </select>
    </div>
  )
}

export default Filters;