import React, { useContext } from 'react'
import { productcontext } from '../contexts/ProductContext'

const Nav = () => {
  const [Products] = useContext(productcontext);
  let Category = Products && Products.map(e => e.category);
  Category = [...new Set(Category)];
  console.log(Category);


  return (
    <div className="left bg-[#f1faee] text-[#1d3557]  w-[16%] h-screen px-5 py-5">
      <h1 className="text-3xl font-semibold">Category</h1>

      <ul className='pt-6 space-y-1.5'>
        {Category.map((e,i) => {
         return <li key={i} className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-[#457b9d] inline-block rounded-full'></span>{e}</li>

        })}
      </ul>
    </div>

  )
}

export default Nav