import React, { useEffect,useState } from 'react';
import "./Home.css";
import BannerPage from './banner/BannerPage';
import TopPicks from './topPicks/TopPicks';
import { useDispatch, useSelector } from 'react-redux';
import { allproducts, clearError } from '../../redux/features/productSlice';
import Loader from '../layout/loader/Loader';
import {toast} from "react-toastify"

const Home = () => {
 const {products,loading,error} = useSelector((state)=>state.product)
 console.log(products);
 const dispach = useDispatch()
 useEffect(()=>{
  if (error) {
    toast.error(error)
    dispach(clearError());
  }
    dispach(allproducts())
 },[dispach,error])
 
  return (  
    <>
    
     <div>
      <BannerPage />
     </div>

     <div className="container bg-{#f5f5f5} mx-auto py-8">
      <strong className='mx-4 text-lg'>On Sale Now</strong>
      {loading ? (<Loader />):(
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product,index)=>(
          <TopPicks key={product._id}product={product}  />
        ))}
      </div>
        </>
      )}

     </div>
    
    </>
  );
};

export default Home