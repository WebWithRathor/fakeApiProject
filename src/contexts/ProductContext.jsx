import React, { createContext } from 'react'

export const productcontext = createContext(null)

const ProductsContext = (props) => {

    
  return (
    <productcontext.Provider value={{key:"hello"}}>
        {props.children}
    </productcontext.Provider>
  )
}

export default ProductsContext