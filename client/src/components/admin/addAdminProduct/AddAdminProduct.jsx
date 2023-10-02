import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const AddAdminProduct = () => {
  return (
    <>
    <div>
      <Link to="/admin-hamrobazar-dashboard-panel">
        <FaArrowLeft />
      </Link>
    </div>
      <div className="bg-white p-8 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name='productName'
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product name"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name='price'
            step="0.01"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product price"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">Ratings</label>
          <input
            type="number"
            name='ratings'
            step="0.1"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product ratings"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">Manufacture</label>
          <input
            type="text"
            name='manufacture'
            step="0.1"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product manufacture"
          />
        </div>
        
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">Category</label>
          <input
            type="text"
            name='category'
            step="0.1"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product category"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">IsInStock</label>
          <input
            type="number"
            name='isInstock'
            step="0.1"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product isInStock"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">productImg</label>
          <input
            type="file"
            name='productImg'
            step="0.1"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter productImg"
          />
        </div>
        <img src="" alt="" />
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter product description"
            rows="4"
          ></textarea>
        </div>
        {/* Add other fields similar to the ones above */}
        <div className="w-full px-4 mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    </>
  )
}
export default AddAdminProduct