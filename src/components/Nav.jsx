import React from 'react'

const Nav = () => {
  return (
    <div className="left bg-[#f1faee] text-[#1d3557]  w-1/5 h-screen px-5 py-5">
        <h1 className="text-3xl font-semibold">Category</h1>

        <ul className='pt-6 space-y-1.5'>
            <li className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-[#457b9d] inline-block rounded-full'></span>Electronics</li>
            <li className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-[#457b9d] inline-block rounded-full'></span>Electronics</li>
            <li className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-[#457b9d] inline-block rounded-full'></span>Electronics</li>
        </ul>
    </div>

  )
}

export default Nav