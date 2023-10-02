import React, { useEffect, useState } from "react";
import {toast} from "react-toastify"
import { changePassword, clearError } from "../../../../redux/features/authSlice";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const ChangePassword = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch =useDispatch();
  const navigate = useNavigate();

  const [changePasswordValue,setchangePasswordValue]=useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:"",
  });
  const [changeErr,setchangeErr]=useState({})

  const {oldPassword,newPassword,confirmPassword}= changePasswordValue;

  
    const validatedForm =()=>{
      let newErrors ={}

      if(!oldPassword){
        newErrors.oldPassword= " oldPassword is required"
      }
      
    
      if (!newPassword) {
        newErrors.newPassword = "newPassword is required";
      } else if (newPassword.length < 8) {
        newErrors.newPassword = "newPassword must be 8 character long";
      }
      if(!confirmPassword){
        newErrors.confirmPassword = "ConfirmPassword is required";
      }

      
     
      setchangeErr(newErrors);
      return Object.keys(newErrors).length ===0;
    }
  
    const handelChange =(e)=>{
      let{name,value}= e.target;
      setchangePasswordValue({...changePasswordValue,[name]:value})
    }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(validatedForm()){
      dispatch(changePassword({changePasswordValue,toast,navigate}));
    }else{
      return toast.warning("invalid Input")
    }
  };
  
 useEffect(()=>{
  if(error){
    toast.error(error)
    dispatch(clearError())
  }
 },[dispatch,error])

  return (
    <div className="bg-[#f5f5f5] my-4 py-2">
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={oldPassword}
              onChange={handelChange}
            />
        {changeErr && <span className='text-sm text-red-500'>{changeErr.oldPassword}</span>}
            
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"

              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={newPassword}
              onChange={handelChange}
              
              
              />
              {changeErr && <span className='text-sm text-red-500'>{changeErr.newPassword}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"

              value={confirmPassword}
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handelChange}
              
              
              />
              {changeErr && <span className='text-sm text-red-500'>{changeErr.confirmPassword}</span>}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-purple-950 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >


             {loading && <Spinner animation="border" size="sm" />} Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
