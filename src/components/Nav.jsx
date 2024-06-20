import React, { useContext, useEffect, useState } from 'react'
import { productcontext } from '../contexts/ProductContext'
import { Link, useLocation } from 'react-router-dom';
import axios from '../utils/axios';

const Nav = () => {
  const [Products] = useContext(productcontext);
  let Category = Products && Products.map(e => e.category);
  Category = [...new Set(Category)];
 



  return (
    <div className="left bg-[#f1faee] text-[#1d3557]  w-[16%] h-screen px-5 py-5">
      <h1 className="text-3xl font-semibold">Category</h1>

      <ul className='pt-6 space-y-1.5'>
        {Category.map((e, i) => {
          return <Link to={`/?category=${e}`} key={i} className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-[#457b9d] inline-block rounded-full'></span>{e}</Link>

        })}
      </ul>
    </div>

  )
}

export default Nav