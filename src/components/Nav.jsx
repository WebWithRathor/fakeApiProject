import React, { useContext, useEffect, useState } from 'react'
import { productcontext } from '../contexts/ProductContext'
import { Link, useLocation } from 'react-router-dom';
import axios from '../utils/axios';

const Nav = () => {
  const [Products] = useContext(productcontext);
  let Category = Products && Products.map(e => e.category);
  Category = [...new Set(Category)];
  const {search} = useLocation()



  return (
    <div className="left bg-[#f1faee] text-[rgb(29,53,87)]  w-full sm:w-[16%] h-screen px-5 py-5">
<Link to="/" className={search === '' ? "hidden" : "initial"}> <button
  type="button"
  className="bg-[#f1faee] border-2 mb-4 text-center w-full rounded-2xl py-3.5 relative font-sans text-black text-xl font-semibold group"
>
  <div
    className="bg-[#457b9d] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-[95%] z-10 duration-500"
  >
    <svg
      width="25px"
      height="100%"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#fff"
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
      ></path>
      <path
        fill="#fff"
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
      ></path>
    </svg>
  </div>
  <p className="translate-x-2">Go Back</p>
</button></Link>

      <h1 className="text-3xl font-semibold">Category</h1>
      <ul className='pt-6 space-y-1.5'>
        {Category.map((e, i) => {
          return <Link to={`/?category=${e}`} key={i} className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-[#457b9d] inline-block rounded-full'></span>{e}</Link>

        })}
      </ul>
      <Link to='/create'><button className='w-full py-3 border-2 rounded-lg mt-4 flex gap-2 justify-center hover:bg-[#457b9d] hover:text-[#f1faee] transition-all'><i className="ri-shopping-cart-line"></i>Add Product</button></Link>
    </div>

  )
}

export default Nav