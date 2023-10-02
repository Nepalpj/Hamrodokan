import React from 'react'
import CommonPage from '../AboutUs/commonpages/CommonPage'
import MoreImg from '../../assets/images/more.png'

const Moreinfo = () => {
  return (
    <>
    <CommonPage title="Namaste Bazzar" 
                subtitle="Moreover"
                desc="Welcome to our Namaste Bazzar website, 
                where shopping meets convenience, variety, and seamless 
                user experience. With a commitment to revolutionizing online 
                shopping, our platform offers an unparalleled range of products,
               innovative features, and exceptional customer service."
               
              desc1="Dive into our vast catalog, where you'll find an extensive
               collection of products spanning diverse categories. From fashion 
               and beauty to electronics, home decor, and beyond, our website is 
               a one-stop destination for all your shopping needs. We curate our 
               inventory meticulously, partnering with renowned brands and trusted
               sellers to guarantee the highest quality items. "
              
              btnView="Services"
              imgAbout={MoreImg}
              visit=""
              />
    </>
  )
}

export default Moreinfo