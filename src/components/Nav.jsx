import React from 'react'

const Nav = () => {
  return (
    <div className="left w-1/5 bg-gray-200 h-screen px-5 py-5">
        <h1 className="text-3xl font-semibold">Category</h1>

        <ul className='pt-6 space-y-1.5'>
            <li className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-red-200 inline-block rounded-full'></span>Electronics</li>
            <li className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-red-200 inline-block rounded-full'></span>Electronics</li>
            <li className='font-semibold flex items-center gap-2'><span className='aspect-square w-3 bg-red-200 inline-block rounded-full'></span>Electronics</li>
        </ul>
    </div>

  )
}

export default Nav