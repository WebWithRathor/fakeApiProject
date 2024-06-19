import React from 'react'

const Card = () => {
  return (
    <div className="card h-[40vh] bg-[#f1faee] rounded-xl p-4 flex flex-col items-center gap-2 shadow-[0px_2px_10px_rgba(0,0,0,.3)]">
      <img className='h-[84%] shrink-0 w-full bg-[#1d3557]' src="" alt="" />
      <div className="desc flex items-center justify-between w-full mt-2">
        <p className='text-sm font-semibold'>Product name</p>
        <h1 className='h-7 aspect-square text-white bg-[#1d3557] rounded-full flex items-center justify-center'><i className="ri-arrow-right-s-line"></i></h1>
      </div>
    </div>

  )
}

export default Card