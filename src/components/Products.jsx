import { useContext } from 'react'
import Card from './Card'
import { productcontext } from '../contexts/ProductContext'

const Products = () => {
  const [Products] = useContext(productcontext);
  
  return (
    <div className='grid grid-cols-5 h-fit max-h-screen w-full p-7 px-14 gap-8 overflow-y-auto'>
      {Products ?
        Products.map((e)=><Card key={e.id} title={e.title} id={e.id} img={e.image} />) :
        <h1 className='text-center text-3xl mt-10 col-span-5 text-white'>Loading...</h1>
        }

    </div>
  )
}

export default Products