import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { BannerData } from './Data';
const BannerPage = () => {
  return (
    <>

    <div className='mb-5'>
    <Carousel data-bs-theme="dark">
        {BannerData.map((banner)=> (
            <Carousel.Item key={banner.id}>
        <img
          className="d-block w-100"
          src={banner.banner_url}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
        ))}
      
  
    </Carousel>
    </div>
    </>
  )
}

export default BannerPage