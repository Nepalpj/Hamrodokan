import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Services from '../../moreinfo/services/Services';


const CommonPage = (prop) => {
  const [showMore,setShowMore]=useState(false);
  const handelViewServices =()=>{
    setShowMore(true);
  }
  return (
    <>
    <div className="font-sans px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
              {prop.subtitle} <span className="text-orange-500">{prop.title}</span>
            </h2>
            <p className="mb-4 text-justify text-gray-700">{prop.desc}</p>
            <>
              <p className="mb-4 text-justify text-gray-700">{prop.desc1}</p>
            </>
            <Link
              to={prop.visit}
              className="inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
              onClick={handelViewServices}
            >
              {prop.btnView}
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src={prop.imgAbout}
              alt="Namaste Bazar"
              className="w-full h-full max-w-md object-contain animate-moveUpDown"
            />
          </div>
        </div>
      </div>
      {showMore ? <Services /> :""}
      </>
  )
}

export default CommonPage