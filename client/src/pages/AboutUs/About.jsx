import React from "react";
import AboutImg from "../../assets/images/About.png";
import CommonPage from "./commonpages/CommonPage.jsx";
import MoreAbout from "./MoreAbout";

const About = () => {
  return (
    <>
      <CommonPage
        title="Namaste Bazzar"
        subtitle="About"
        desc="Welcome to Namaste Bazzar, Nepal's premier e-commerce website 
        that brings the best of Nepal's products and culture to your doorstep. 
        As an online marketplace dedicated to promoting Nepalese craftsmanship,
         we offer a diverse range of authentic products that reflect the rich
         heritage and traditions of Nepal."
        desc1="Upon entering Namaste Bazzar, you will be greeted by a visually 
        appealing and user-friendly interface that ensures a seamless shopping 
        experience. Our website showcases an extensive collection of categories, 
        including fashion, handicrafts, home decor, electronics, books, and more.
         From traditional Nepali attire like Dhaka clothing and ethnic jewelry to 
         intricately handcrafted woodwork and exquisite Thangka paintings, our platform 
         provides an opportunity to explore and purchase unique Nepalese products."
        btnView="Learn More"
        imgAbout={AboutImg}
        visit="/Moreinfo"
      />
      <MoreAbout />
    </>
  );
};

export default About;
