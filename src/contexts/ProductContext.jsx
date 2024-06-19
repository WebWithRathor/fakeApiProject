import axios from '../utils/axios'
import React, { createContext, useEffect, useState } from 'react'

export const productcontext = createContext(null)

const ProductsContext = (props) => {

  const [products, setproducts] = useState(null)
    const getProducts = async()=>{
      try {
        const {data} = await axios.get('/products');
        setproducts(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    useEffect(()=>{
      getProducts()
    },[]);

  return (
    <productcontext.Provider value={[products, setproducts]}>
        {props.children}
    </productcontext.Provider>
  )
}

export default ProductsContext