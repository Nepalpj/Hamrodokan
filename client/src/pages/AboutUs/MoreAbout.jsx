import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import More from "../../assets/images/About1.png"
import Further from './Further';

const MoreAbout = () => {
  const [showMore,setshowMore]= useState(false) // setshowMore changes the value of showMore
  const Details = ()=>{
    setshowMore(true);
  }
  return (
    <>
    <div className="font-sans px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
         
          <div className="flex justify-center">
            <img
              src={More}
              alt="Namaste Bazar"
              className="w-full h-full max-w-md object-contain animate-moveUpDown"
            />
          </div>
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl"> What's 
               <span className="text-orange-500"> More</span>
            </h2>
            <p className="mb-4 whitespace-pre-line text-justify text-gray-700">We take great pride in curating our inventory,
             collaborating with local artisans, designers, and businesses to offer you the highest quality products. Each product 
             page features detailed descriptions, multiple high-resolution images,
             and customer reviews, allowing you to make well-informed decisions while shopping.</p>
            <>
              <p className="mb-4 text-gray-700 text-justify ">At Namaste Bazzar, we are committed to supporting and empowering local 
              entrepreneurs and artisans. By shopping with us, you contribute directly to the preservation of Nepalese heritage and the growth of small-scale businesses. We strive to create a platform that
               showcases the talents of Nepalese craftsmen and connects them with a global audience.</p>
            </>
            <Link
              className="inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
              onClick={Details}
            >
            Further
            </Link>
            
          </div>
        </div>
        {showMore ? <Further /> : "" }       
      </div>
    </>
  )
}

export default MoreAbout