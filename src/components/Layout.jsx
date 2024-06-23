import React from 'react'
import Nav from './Nav'
import Products from './Products'

const Layout = () => {
    return (
        <>
            <div className="main  bg-[#457b9d] h-screen w-full  flex flex-col sm:flex-row">
                <Nav />
                <Products />
            </div>
        </>
    )
}

export default Layout