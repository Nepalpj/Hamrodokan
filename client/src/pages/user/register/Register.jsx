import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { clearError, register } from '../../../redux/features/authSlice'

const Register = () => {
  const {loading,error} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [registerValue,setRegisterValue]=useState({
    fullName:"",
    email:"",
    mobileNo:"",
    password:"",
    confirmPassword:"",
  })
  const [registerErr,setRegisterErr]=useState({})

  const {fullName,email,mobileNo,password,confirmPassword}= registerValue;
    const validatedForm =()=>{
      let newErrors ={}
       const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

      if(!fullName){
        newErrors.fullName= "FullName is required"
      }
      if(!email) {
        newErrors.email ="Email is required"
      }else if(!emailRegex.test(email)){
        newErrors.email ="Invalid email";
      }
      if(!mobileNo){
        newErrors.mobileNo = "MobileNo is required"

      }else if (mobileNo.length !==10){
        newErrors.mobileNo ="MobileNo must be 10 digit";
      }
      if (!password){
        newErrors.password="Password is required";
        
      }else if(password.length < 8){
        newErrors.password ="Password must be 8 characters long";
      }
      if(!confirmPassword){
        newErrors.confirmPassword = "ConfirmPassword is required";
      }
     else if(password !== confirmPassword)
      {
        newErrors.confirmPassword = "Password must be match"
      }
      setRegisterErr(newErrors);
      return Object.keys(newErrors).length ===0;
    }
  const handelChange = (e)=>{
    let{name,value}=e.target;
    setRegisterValue({...registerValue,[name]:value})
  }
  const handelSubmit =(e)=>{
    e.preventDefault();
    if(validatedForm()){
    dispatch(register({registerValue,toast,navigate}));

    }else{
      return toast.warning("Invalid Input");
    }
  };
  useEffect(()=>{
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }

  }),[dispatch, error]
  return (
    <div className='bg-[#f5f5f5] my-4 py-2'>
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
    <h2 className="text-2xl font-semibold mb-4">Register</h2>
    <form onSubmit={handelSubmit}>
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-gray-700"

        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
          value={fullName}
          onChange={handelChange}
        />
        {registerErr && <span className='text-sm text-red-500'>{registerErr.fullName}</span>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
          value={email}
          onChange={handelChange}
        />
        {registerErr && <span className='text-sm text-red-500'>{registerErr.email}</span>}

      </div>
      <div className="mb-4">
        <label
          htmlFor="mobileNo"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="mobileNo"
          name="mobileNo"
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
         value={mobileNo}
          onChange={handelChange}
      />
        {registerErr && <span className='text-sm text-red-500'>{registerErr.mobileNo}</span>}

      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
          value={password}
          onChange={handelChange}
        />
        {registerErr && <span className='text-sm text-red-500'>{registerErr.password}</span>}

      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmpassword"
          className="block text-sm font-medium text-gray-700"
        >
         Confirm Password
        </label>
        <input
          type="password"
          id="confirmpassword"
          name="confirmPassword"
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
          value={confirmPassword}
          onChange={handelChange}
       
       />
        {registerErr && <span className='text-sm text-red-500'>{registerErr.confirmPassword}</span>}

      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="py-2 px-4 bg-purple-950 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
         {loading && <Spinner animation="border" size="sm" />} Register
        </button>
        <div className='mt-4'>
          <span className='pr-2'>Already have an account? </span>
          <Link className='underline' to ="/login">Login</Link>
        </div>
      </div>
    </form>
  </div>
  </div>
  )
}

export default Register