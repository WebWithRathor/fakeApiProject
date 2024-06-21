import { Link, useLocation, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'

const Detail = () => {
  const [product, setproduct] = useState(null)
  const {id} = useParams()
  const path = useLocation()
  console.log(path);
  const getSingleProduct = async()=>{
    try {
      const {data} = await axios.get(`/products/${id}`) ;
      setproduct(data);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getSingleProduct()
  },[])

  return (
    !product ? <h1 className='text-center mt-72 h-screen text-4xl font-semibold text-[#1d3557]'>Loading...</h1> : <div className='flex items-center justify-center h-screen w-full gap-5 bg-[#eaeaea]'>
      <Link to={`/?category=${product.category}`} className='absolute top-5 left-5 w-[11vw]' > <button
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
    <div className="productImg rounded p-10 h-2/3 w-[25%] bg-[#eaeaea]">
    <img className='h-full w-full object-contain mix-blend-darken' src={product.image} alt="" /></div>
    <div className="productDesc rounded-lg text-[#f1faee] w-1/3 bg-[#457b9d] p-7 overflow-auto">
      <h1 className='font-semibold'>{product.category}</h1>
      <h1 className='font-semibold text-3xl mt-3'>${product.price}</h1>
      <h1 className='font-semibold text-4xl mb-3'>{product.title}</h1>
      <div className="flex items-center gap-3 my-2"><h1><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></h1> <span>Sold {product.rating.count}</span></div>
      <p className='text-sm'>{product.description}</p>
      <div className="btns flex gap-4 mt-6"><button className='w-1/2 py-3 rounded bg-[#1d3557] text-[#f1faee] text-xl border rounded-md'>Edit</button><button className='w-1/2 py-3 rounded bg-[#1d3557] text-[#f1faee] text-xl border rounded-md'>Edit</button></div>
    </div>
  </div> 
  )
}

export default Detail