import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from '../utils/axios'
import React, { useContext, useEffect, useState } from 'react'
import { productcontext } from '../contexts/ProductContext'

const Detail = () => {
  const [product, setproduct] = useState(null)
  const [products,setproducts] = useContext(productcontext);
  const { id } = useParams()
  const navigate = useNavigate()
  const path = useLocation()
  const localProducts = JSON.parse(localStorage.getItem('products'));
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
      if (!data) setproduct(localProducts.find(product => product.id === id));
    } catch (error) {
      console.log(error.message)
    }
  }

  const deleteHandler = ()=>{
    localStorage.setItem('products', JSON.stringify(localProducts.filter(product => product.id !== id)));
    setproducts(products.filter(product => product.id !== id));
    navigate('/')
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  return (
    !product ? <div className='flex items-center justify-center h-screen w-full gap-5 bg-[#eaeaea]'>
      <div className="bg-[#1d3557] w-[20%] h-2/3 rounded-lg animate-pulse "></div>
      <div className="bg-[#1d3557] w-1/3 h-2/3 rounded-lg animate-pulse "></div>
    </div> : <div className='flex p-5 pt-16 sm:flex-row flex-col items-center justify-center w-full gap-5 bg-[#eaeaea]'>
      <Link to={`/?category=${product.category}`} className='absolute top-5 left-5 sm:w-[11vw] w-[35vw] ' > <button
        type="button"
        className="bg-[#f1faee] border-2 mb-4 text-center w-full rounded-2xl py-3.5 px-3 relative font-sans text-black text-md sm:text-xl font-semibold group flex items-center justify-end"
      >
        <div
          className="bg-[#457b9d] rounded-xl h-[80%] w-fit sm:w-1/4 flex items-center justify-center absolute left-1 top-1 group-hover:w-[95%] z-10 duration-500"
        >
          <svg
            width="70%"
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
        <p className="">Go Back</p>
      </button></Link>
      <div className="productImg rounded p-10 h-2/3 w-full sm:w-[25%] bg-[#eaeaea]">
        <img className='h-full w-full object-contain mix-blend-darken' src={product.image} alt="" /></div>
      <div className="productDesc h-fit rounded-lg text-[#f1faee] w-full mx-3 sm:w-1/3 bg-[#457b9d] p-7">
        <h1 className='font-semibold break-all'>{product.category}</h1>
        <h1 className='font-semibold break-all text-3xl mt-3'>${product.price}</h1>
        <h1 className='font-semibold break-all text-4xl mb-3'>{product.title}</h1>
        <div className="flex items-center gap-3 my-2"><h1><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i></h1> <span>Sold {product.rating.count}</span></div>
        <p className='text-sm'>{product.description}</p>
        <div className="btns flex gap-4 mt-6">
          <Link className='w-1/2' to={`/edit/${product.id}`}><button className='w-full py-3 flex items-center justify-center rounded bg-[#1d3557] text-[#f1faee] text-lg hover:bg-[#f1faee] hover:text-[#1d3557] transition-all border rounded-md' > <i className="ri-edit-line mr-1"></i> Edit</button></Link>
          <button onClick={deleteHandler} className='w-1/2 py-3 flex items-center justify-center rounded bg-[#1d3557] text-[#f1faee] text-lg hover:bg-[#f1faee] hover:text-[#1d3557] transition-all border rounded-md'> <i className="ri-delete-bin-2-line mr-1"></i> Delete</button></div>
      </div>
    </div>
  )
}

export default Detail