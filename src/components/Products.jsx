import React from 'react'
import Card from './Card'

const Products = () => {
  return (
    <div className='grid grid-cols-5 h-fit w-full p-7 px-14 gap-5 overflow-y-auto'>
        <Card/>
    </div>
  )
}

export default Products