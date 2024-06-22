import { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { productcontext } from '../contexts/ProductContext'
import { json, useLocation } from 'react-router-dom';
import axios from '../utils/axios';

const Products = () => {
  const [Products] = useContext(productcontext);
  const [filterProducts, setfilterProducts] = useState(null)
  let categoryProduct = useLocation()
  categoryProduct = decodeURIComponent(categoryProduct.search.split('=')[1])
  const localProducts = JSON.parse(localStorage.getItem('products'));
  const getCategoryProduct = async () => {
    if (categoryProduct  !== 'undefined') {
      try {
        const { data } = await axios.get(`/products/category/${categoryProduct}`)
        // data.push(...localProducts.filter(product => product.category === categoryProduct));
        // console.log(data);
        setfilterProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  useEffect(()=>{
    if(categoryProduct === 'undefined') setfilterProducts(Products);
    getCategoryProduct();
  },[categoryProduct,Products])
  
  return (
    <div key={categoryProduct} className='grid grid-cols-5 h-fit max-h-screen w-full p-7 px-14 gap-8 overflow-y-auto'>
      {filterProducts ?
        filterProducts.map((e)=><Card key={e.id} title={e.title} id={e.id} img={e.image} />) :
        <><div className="bg-gray-200 rounded-lg animate-pulse h-[40vh]"></div>
        <div className="bg-gray-200 rounded-lg animate-pulse h-[40vh]"></div>
        <div className="bg-gray-200 rounded-lg animate-pulse h-[40vh]"></div>
        <div className="bg-gray-200 rounded-lg animate-pulse h-[40vh]"></div>
        <div className="bg-gray-200 rounded-lg animate-pulse h-[40vh]"></div></>
        }

    </div>
  )
}

export default Products