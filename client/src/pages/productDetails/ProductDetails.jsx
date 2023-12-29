import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from "react-rating-stars-component";
import { useParams } from 'react-router-dom'
import { clearError, singleProduct } from '../../redux/features/productSlice'

const ProductDetails = () => {
    const {product,loading,error}=useSelector((state)=>state.product)
    const options={
      edit:false,
      color:"rgba(20,20,20,0.1",
      activeColor:"#ffd700",
      size:window.innerWidth < 600? 17 :16,
      value:product.ratings,
      isHalf:true,
    }
    console.log(product);
    const dispatch =useDispatch();
    const {id}= useParams();
    useEffect(()=>{
        if (error) {
            toast.error(error)
            dispatch(clearError());
        }
        dispatch(singleProduct(id));
    }, [dispatch,error,id]);
  return (
    <>
    <div className='  conatiner mx-auto md:flex pr-44 flex my-10'>
    <div className=' ml-44  py-14 w-full md:w-1/2 p-2 flex justify-center '>
      <img className='w-54 h-auto flex  ' src={product?.productImg?.url} alt={product.productName}/>
    </div>
    <div className='ml-2  w-full md:w-1/2 p-2 flex bg-gray-100 '>
      <div className='flex-col pl-3 '>
      <p className='font-extrabold  text-4xl'>{product?.productName}</p>
      <div className="flex mt-2 items-center mb-2 ">
              <div className=" pl-3">
                <span className="text-yellow-500">
                  <ReactStars {...options}/>
                </span>
              </div>
              <div>
                <span className="text-gray-600">
                  customer reviews
                </span>
              </div>
            </div>
      <p className='mt-2 font-semibold text-red-500  text-3xl'>Price: Rs.{product?.price}</p>
      
      <p className=  {product.isInStock ? " text-green-700 text-2xl mt-5 font-semibold"
      : "text-red-500 text-2xl font mt-5 semibold "}  >
        {product.isInStock ? "In Stock " : "Out Of Stock"} {product?.isInStock}
      </p>
      <div>
      <label className='mt-1 font-semibold   text-xl' for="points">Qty:</label>
      <input type="number" id="points" name="points" step="1" className='border-2 rounded my-2 h-7'></input>
      </div>
      <div>
      <button className='border rounded-lg mt-2 mr-3   border-rose-500 bg-red-500  text-gray-50 h-12 w-32 '>
        Add to Cart
      </button>
      <button className='border rounded-lg mt-2 border-rose-500 bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-50 h-12 w-32 '>
        Buy Now
      </button>
    </div>
      </div>
    </div>
    
  </div>
  <div className=' conatiner  md:flex ml-44 py-14 mr-44 mb-5 '>
    <div className='bg-purple-950 w-full h-12 pl-3 mb-4'>
    <strong className=' text-gray-50 text-3xl ' >Product Details</strong>
    <p className='mt-2 font-semibold text-gray-500 pl-5 pt-2 text-xl'> 1.Category: {product?.category}</p>
      <p className='mt-2 font-semibold text-gray-500 pl-5  text-xl'>2.Manufacture: {product?.manufacture}</p>
      <p className='mt-2 font-semibold text-gray-500 pl-5  text-xl'>3.Posted: {product?.created}</p>

    </div>
    
        
    </div>
  </>
  )
}

export default ProductDetails;