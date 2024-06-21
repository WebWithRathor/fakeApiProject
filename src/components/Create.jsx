import React from 'react'

const Create = () => {
    return (
        <>
        <div className="h-screen flex flex-col w-full justify-center items-center">
            <h1 className='w-[35%] px-8 font-bold text-[#1d3557] text-3xl'>Add Product</h1>
        <form className="p-7 w-[35%] space-y-5">
        <div className="w-full flex gap-3">
            <input type="text" placeholder='Title' className='capitalize  shadow-2xl p-3 w-1/2 outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' />
            <input type="number" placeholder='price (in $)' className='capitalize  shadow-2xl p-3 w-1/2 outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' />
       </div>
            <input type="text" placeholder='Title' className='capitalize  shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' />
            <textarea type="text" placeholder='Title' className='capitalize  shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' ></textarea>
            <button className='w-full py-3 text-xl bg-[#1d3557] text-white font-semibold rounded shadow-2xl border-2 border-[#1d3557] hover:bg-transparent hover:text-[#1d3557] transition-all'>Submit</button>
        </form>
        </div>
      </>
    )
}

export default Create