import React, { useContext, useState } from 'react'
import { productcontext } from '../contexts/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    let localProducts = JSON.parse(localStorage.getItem('products')) ;
    const [products,setproducts] = useContext(productcontext);
    const {id} = useParams();
    const product = localProducts.find(e => e.id === id);
    const [title, settitle] = useState(product.title);
    const [price, setprice] = useState(product.price);
    const [image, setimage] = useState(product.image);
    const [category, setcategory] = useState(product.category);
    const [description, setdescription] = useState(product.description);
    const [rating, setrating] = useState(product.rating);
    console.log(rating);
    const navigate = useNavigate()
    const updateHandler = (event) => {
        event.preventDefault();
        const newData = {id,rating,title,description,image,category,price,local:true};
        localStorage.setItem('products', JSON.stringify(localProducts.map(e=>e.id != id ? e : newData)));
        setproducts([...products,...localProducts]);
        setcategory("men's clothing");
        setdescription("")
        setimage("")
        setprice("")
        settitle("")
        setrating("")
        navigate(`/product/${id}`)
    }
    return (
        <>
            {product ? <div className="h-screen flex flex-col w-full justify-center items-center">
                <h1 className='w-full sm:w-[35%] px-8 font-bold text-[#1d3557] text-3xl'>Add Product</h1>
                <form onSubmit={updateHandler} className="p-7 w-full sm:w-[35%] space-y-5">
                    <div className="w-full flex gap-3">
                        <input required value={title} onChange={(e) => settitle(e.target.value)} type="text" placeholder='Title' className='capitalize  shadow-2xl p-3 w-1/2 outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' />
                        <input required value={price} onChange={(e) => setprice(e.target.value)} type="number" placeholder='price (in $)' className='capitalize  shadow-2xl p-3 w-1/2 outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' />
                    </div>
                    <input required type="url" value={image} onChange={(e) => setimage(e.target.value)} placeholder='ImageURL' className='capitalize  shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' />
                    <div className="w-full flex sm:flex-row flex-col items-center justify-between">
                        <select value={category} onChange={(e) => setcategory(e.target.value)} name="" id="" className='capitalize  shadow-2xl p-3 w-full sm:w-1/3 outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded'>
                            <option value="electronics">electronics</option>
                            <option value="jewelery">jewelery</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="women's clothing">women's clothing</option>
                        </select>
                        <h1 className='text-xl sm:text-lg py-3 sm:py-0'>Rating :</h1>
                        <div className="rating">
                            <input name='star-radio' type="radio" onChange={(e) => setrating(e.target.value)} checked={rating === '5' ? true : false} value="5" id="star-1" />
                            <label htmlFor="star-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input name='star-radio' type="radio"  onChange={(e) => setrating(e.target.value)} checked={rating === '4' ? true : false} value="4" id="star-2" />
                            <label htmlFor="star-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input name='star-radio' type="radio" onChange={(e) => setrating(e.target.value)} checked={rating === '3' ? true : false} value="3" id="star-3" />
                            <label htmlFor="star-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input name='star-radio' type="radio" onChange={(e) => setrating(e.target.value)} checked={rating === '2' ? true : false} value="2" id="star-4" />
                            <label htmlFor="star-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                            <input name='star-radio' type="radio" onChange={(e) => setrating(e.target.value)} checked={rating === '1' ? true : false} value="1" id="star-5" />
                            <label htmlFor="star-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path></svg>
                            </label>
                        </div>
                    </div>
                    <textarea required type="text" placeholder='Description' value={description} onChange={(e)=>setdescription(e.target.value)} className='capitalize  shadow-2xl p-3 w-full outline-none focus:border-solid focus:border-[1px] border-[#457b9d] rounded' ></textarea>
                    <button className='w-full py-3 text-xl bg-[#457b9d] text-white font-semibold rounded shadow-2xl border-2 border-[#457b9d] hover:bg-transparent hover:text-[#457b9d] transition-all'>Submit</button>
                </form>
            </div> : 'loading'}
        </>
    )
}

export default Update