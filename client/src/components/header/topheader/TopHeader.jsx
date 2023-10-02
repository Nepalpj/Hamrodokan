import React, { useEffect, useState } from 'react'
import  { FaWhatsapp } from "react-icons/fa6"
import  { FaViber } from "react-icons/fa"
import  { FaMobileAlt } from "react-icons/fa"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import decode from "jwt-decode"
import {  setLogout } from '../../../redux/features/authSlice'

const TopHeader = ({isAuthenticated,user}) => {
  // const { isAuthenticated, user} = useSelector((state)=> state.auth)
  const userToken = localStorage.getItem("token")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[isShownDropdown,setIsShownDropDown] = useState(false);
  const handelLogout = ()=>{
    dispatch(setLogout())
    navigate("/")
    toast.success("logout successfully!");
  }
  
  useEffect (()=>{
    if(userToken){
      const decodedToken = decode(userToken)
      if(decodedToken.exp*1000 <new Date().getTime()){
        dispatch(setLogout())
        toast.warning("your session has been expired,login first")
        navigate("/login")
      }
    }
  })

  return (
    <>
    <div className='flex justify-between  ...'>
    <div className='flex pl-5 h-5 '>
    <FaWhatsapp className='h-8 text-green-500'/>
   <span className='h-4 pl-1 pr-1'>|</span> 
   <FaViber className='h-8' />
    <span className='pl-1 text-slate-600 '>9803513810/9886161935</span>
    </div>
    <div>
        
        <div className='flex justify-between  ...' >
        <span className='flex pl-5 pr-5 text-slate-600 hover:text-red-500 '>Rewards</span>
        <span className='flex pl-5 pr-5 text-slate-600 hover:text-red-500 '>Delivery option</span>
        <div className='relative'>
       {isAuthenticated ? (
        <div className='flex items-center'>
          <button className='flex items-center space-x-2 focus:outline-none'
           onClick={()=>setIsShownDropDown(!isShownDropdown)}>
          <img src={user?.avatar?.url} alt='avatar Img' className='w-8 h-8 rounded-full'/>
          <span>{user.fullName}</span>
          </button>
          {isShownDropdown && (
            <div className='fixed mt-12 top-0 mr-0 z-10 w-44 bg-white shadow-sm rounded-sm'>
            <ul>
              <li className='px-4 py-2'>
                <NavLink to="/profile/information">
                profile
                </NavLink>
              </li>
              <li className='px-4 py-2'>
                <NavLink to="/profile">
                My Order
                </NavLink>
              </li>
              <li className='px-4 py-2'>
                <NavLink to="/">
                My Cart
                </NavLink>
              </li>
              <li className='px-4 py-2'>
                <NavLink to="/changepassword">
                Change Password
                </NavLink>
              </li>
              {user && user.role === "admin" &&(
                    <li className='px-4 py-2'>
                    <NavLink to="/admin-namastebazzar/dashboard-panel" className="no-underline text-gray-500">admin dashboard</NavLink>
                  </li>
                  )}
              <li className='px-4 py-2'>
                <button onClick={handelLogout} className='text-gray-500 hover:text-red-500'>
                Logout
                </button>
              </li>
            </ul>
            </div>
          )}
        </div>
       ):(
        <NavLink to="/login">
        <span className='flex pl-5 pr-5 text-slate-600 '>Login/Register</span>
        </NavLink>
       )}
      </div>
        <div className='flex pt-1 text-slate-600  pr-5' >
         <FaMobileAlt />

        </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default TopHeader