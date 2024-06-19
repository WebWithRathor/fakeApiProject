import { useState } from 'react'
import Nav from './components/Nav'
import Products from './components/Products'
import axios from './utils/axios'

function App() {
const getProducts = async()=>{

  const data = await axios('/products');
  console.log(data);
}
getProducts()
  return (
    <>
    <div className="main bg-[#457b9d] h-screen w-full flex">
      <Nav/>
      <Products/>
    </div>
    </>
  )
  }
export default App
