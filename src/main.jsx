import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsContext from './contexts/ProductContext.jsx'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductsContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductsContext>
)
