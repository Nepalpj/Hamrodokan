import React from "react"
import CustomerSupport from "../../../assets/images/customer.png"
import Quality from "../../../assets/images/quality.png"
import Shipping from "../../../assets/images/freeshipping.png"
import DeliveryOption from "../../../assets/images/deliveryoption.png"
import Return from "../../../assets/images/return.png"
import Reliable from "../../../assets/images/reriable.png"
import Price from "../../../assets/images/pricecom.png"
import Chat from "../../../assets/images/Chat.png"

export const DataServices =[{
    id:1,
    title:"Customer Support",
    description:"we provide 24/7 customer support",
    image_url: CustomerSupport,
    visit:"/customer-support",
},
{
    id:2,
    title:"Quality",
    description:"We provide the highest quality products.",
    image_url: Quality,
    visit:"/Quality", 
},{
    id:3,
    title:"Shipping",
    description:"We provide products with free shipping.",
    image_url: Shipping,
    visit:"/free-shipping",
},{
    id:4,
    title:"Fast Delivery",
    description:"We deliver the product within 24 hours.",
    image_url: DeliveryOption,
    visit:"/DeliveryOption",
},{
    id:5,
    title:"Return Policy",
    description:"We will return the full payment if there is any damage or if the wrong product is delivered.",
    image_url: Return,
    visit:"/DeliveryOption",
},{
    id:6,
    title:"Reliable",
    description:"Our products are reliable.",
    image_url: Reliable ,
    visit:"/DeliveryOption",
},{id:6,
    title:"Price Comparison",
    description:"wWe sell products at the best prices.",
    image_url: Price ,
    visit:"/Price",
},{
    id:7,
    title:"Chat Bot",
    description:"We have a chatbot for instant support.",
    image_url: Chat ,
    visit:"/Price",
}]