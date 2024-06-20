import { useParams } from 'react-router-dom'
import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'

const Detail = () => {
  const [product, setproduct] = useState(null)
  const getSingleProduct = async()=>{
    try {
      const {data} = await axios.get('/products/1') ;
      setproduct(data);
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    getSingleProduct()
  },[])
  console.log(product);

  return (
    !product ? <h1 className='text-center mt-72 h-screen text-4xl font-semibold text-[#1d3557]'>Loading...</h1> : <div className='flex items-center justify-center h-screen w-full gap-3 bg-[#f1faee]'>
    <div className="productImg rounded p-10 h-2/3 w-[25%] bg-transparent">
    <img className='h-full w-full object-contain mix-blend-darken' src={product.image} alt="" /></div>
    <div className="productImg rounded text-[#f1faee] h-2/3 w-1/3 bg-[#457b9d] p-7">
      <h1 className='font-semibold'>{product.category}</h1>
      <h1 className='font-semibold text-3xl mt-3'>${product.price}</h1>
      <h1 className='font-semibold text-4xl mb-3'>{product.title}</h1>
      <div className="flex items-center gap-3 my-2"><h1><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></h1> <span>Sold {product.rating.count}</span></div>
      <p>{product.description}</p>
      <div className="btns flex gap-4 mt-6"><button className='w-1/2 py-3 rounded bg-[#1d3557] text-[#f1faee] text-xl border rounded-md'>Edit</button><button className='w-1/2 py-3 rounded bg-[#1d3557] text-[#f1faee] text-xl border rounded-md'>Edit</button></div>
    </div>
  </div> 
  )
}

export default Detail