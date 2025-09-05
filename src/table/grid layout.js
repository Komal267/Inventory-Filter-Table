import React from 'react'

const Grid = () => {
  return (
    <div className='main-product'>
      <div className='searchbar'>
        
     <p> <input type='text' className='search-item' placeholder='Search...'/></p>
   <p><input type='checkbox' className='search-item'/><span>Only show products in stock</span></p>
      </div>
      <div className='productTable'>

        <div className='categoryRow item-1' > Name
        </div>
        
        <div className='categoryRow item-2' > Price
        </div>
        
        <div className='categoryRow item-3' > Fruits
        </div>
        
        <div className='categoryFruit item-4' > Apple
        </div>
        
        <div className='categoryFruit item-5' > Dragonfruit
        </div>
        
        <div className='categoryFruit item-6' > Passionfruit
        </div>

        
        <div className='categoryColumn item-11' > $1
        </div>
        
        <div className='categoryColumn item-12' > $1
        </div>
        
        <div className='categoryColumn item-13' > $2
        </div>
        
        <div className='categoryRow item-7' > Vegetabels
        </div>
        
        <div className='categoryFruit item-8' > Spinach
        </div>
        <div className='categoryFruit item-9' > Pumpkin
        </div>
        <div className='categoryFruit item-10' >Peas
        </div>
        <div className='categoryColumn item-14' > $2
        </div>
        <div className='categoryColumn item-15' > $4
        </div>
        <div className='categoryColumn item-16' > $1
        </div>
      </div>

    </div>
  )
}

export default Grid
