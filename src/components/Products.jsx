import { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { productcontext } from '../contexts/ProductContext'
import { useLocation } from 'react-router-dom';
import axios from '../utils/axios';

const Products = () => {
  const [Products] = useContext(productcontext);
  const [filterProducts, setfilterProducts] = useState(null)
  let categoryProduct = useLocation()
  categoryProduct = decodeURIComponent(categoryProduct.search.split('=')[1])

  const getCategoryProduct = async () => {
    if (categoryProduct  !== 'undefined') {
      try {
        const { data } = await axios.get(`/products/category/${categoryProduct}`)
        setfilterProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(()=>{
    if(categoryProduct === 'undefined') setfilterProducts(Products);
    getCategoryProduct();
    console.log(filterProducts);
  },[categoryProduct,Products])
  
  return (
    <div className='grid grid-cols-5 h-fit max-h-screen w-full p-7 px-14 gap-8 overflow-y-auto'>
      {filterProducts ?
        filterProducts.map((e)=><Card key={e.id} title={e.title} id={e.id} img={e.image} />) :
        <h1 className='text-center text-3xl mt-10 col-span-5 text-white'>Loading...</h1>
        }

    </div>
  )
}

export default Products