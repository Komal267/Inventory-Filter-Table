import React, { useState } from 'react'
import "./search.css"

const Searchbar = ({filterText, inStockOnly,onFilterTextChange,
  onInStockOnlyChange}) => {
  // const [count, setCount]= useState(0)
  return (<>
    {/* <div className='search'> */}
      <form className='form'>
      <input type='text' value = {filterText}  className='search-item' placeholder='Search...' onChange={(e)=>onFilterTextChange(e.target.value)}/>
  <label> <input type='checkbox' checked = {inStockOnly} className='search-item' onChange={(e)=>onInStockOnlyChange(e.target.checked)}/>{' '}Only show products in stock</label>
  </form>
    
   
    </>
  )
}

export default Searchbar
