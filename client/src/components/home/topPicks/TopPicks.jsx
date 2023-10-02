import React from 'react'
import { Link } from 'react-router-dom'

const TopPicks = ({product}) => {
  return (
   <>
   
   <div className="bg-{#fff} flex  flex-col items-center p-4 space-y-2">
    <Link to = {`/product/details/${product._id}`} >
    <img className='w-32 h-32 object-cover rounded-sm transition duration-500 ease-in-out transform 
                hover:-translate-y-1 hover:scale-105 sm:mb-4 cursor-pointer' src={product.productImg.url} alt={product.productName}/>
    <h2>{product.productName}</h2>
    <p className='text-slate-500'>{product.description}</p>
    <p className='font-bold'>Rs.{product.price}</p>
    </Link>
   </div>
   </>
  )
}

export default TopPicks