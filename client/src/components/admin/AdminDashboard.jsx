import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from 'react-bootstrap/esm/Spinner';
import AllAdminProducts from './allAdminProducts/AllAdminProducts';

const AdminDashboard = () => {
  

  return (

    <>
    <div className='my-12'>
      <AllAdminProducts />
    </div>
    </>
  )
}

export default AdminDashboard