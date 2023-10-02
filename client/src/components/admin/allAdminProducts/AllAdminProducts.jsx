import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import {FaPencilAlt} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { clearError } from "../../../redux/features/productSlice";
import { productsAdmin } from "../../../redux/features/adminSlice";
import ViewTable from "./ViewTable";
import Spinner from "react-bootstrap/esm/Spinner";
const AllAdminProducts = () => {
    const {loading,error,adminProducts} = useSelector((state)=>state.admin);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearError());
        } else
        dispatch(productsAdmin());
    }, [dispatch,error]);
  return (
    <>
    <div className="flex">
      <h2>View All Products</h2>
       <Link to="/add/admin/products">
       <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ">Add Product</button>
       </Link>
    </div>
      <div class="font-sans relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product Name
              </th>
              <th scope="col" class="px-6 py-3">
                product Image
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                isInstock
              </th>
              <th scope="col" class="px-6 py-3">
                manufacture
              </th>
              
              <th scope="col" class="px-6 py-3">
                ratings
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
           {loading ? (
            <tr>
              <td colSpan={9} className="text-center">
               <Spinner animation="border" size="sm" />
              </td>
            </tr>
           ): adminProducts && adminProducts.map((item)=>(
            <ViewTable key={item._id} item={item} />
           ))}
          </tbody>

        </table>
      </div>
    </>
  );
};
export default AllAdminProducts;