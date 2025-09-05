import React, { useState } from 'react'
import Searchbar from './searchbar'
import ProductTable from './ProductTable'
import products from './ProductData'


const FilteredTable = () => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly,setInStockOnly]= useState(false);
  return (
    
        <div className="Table-container">
     <Searchbar filterText={filterText} 
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly} />
     <ProductTable products = {products} filterText={filterText} inStockOnly= {inStockOnly}/>
    </div>
    
  )
}

export default FilteredTable
