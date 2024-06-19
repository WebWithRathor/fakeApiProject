import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,title,img}) => {
  return (
    <div className="card  h-[40vh] bg-[#f1faee] rounded-xl flex flex-col items-center justify-between overflow-hidden gap-2 shadow-[0px_3px_13px_#1d3557]">
      <img className='h-[80%]  object-contain shrink-0 w-full mix-blend-darken p-7' src={img} alt="" />
      <div className="desc flex items-center justify-between w-full pt-2.5 bg-[#1d3557] px-4 py-3 text-[#f1faee]">
        <p className='font-semibold'>{title.substring(0,10) + "..."}</p>
        <Link to={`/product/${id}`}><h1 className='h-7 hover:scale-110 transition-all cursor-pointer aspect-square text-[#1d3557] bg-[#f1faee] rounded-full flex items-center justify-center'><i className="ri-arrow-right-s-line font-semibold"></i></h1></Link>
      </div>
    </div>

  )
}

export default Card