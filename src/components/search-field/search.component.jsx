import React from 'react'
import './search.css'
const Search=({placeholder,handleChange})=>(
    <div >
         <input type="search"
         className="Search"
          placeholder={placeholder}
          onChange={handleChange}
        />
    </div>
)
export default Search;