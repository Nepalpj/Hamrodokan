
import React, { useState } from 'react';
import Logo from "../../assets/images/Na.png";
import Search1 from './search/Search1';
import { GoSearch } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FaShopify } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from 'axios';



const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = async () => {
    if (searchKeyword.trim() !== "") {
      try {
        // Make an API request to the search endpoint with the search keyword
        const response = await axios.get(`/api/v1/all/products?keyword=${searchKeyword}`);
        
        if (response.status === 200) {
          // Handle the response data, e.g., update your UI with the search results
          console.log('Search results:', response.data);
        }
      } catch (error) {
        // Handle any errors that occur during the search
        console.error('Error searching:', error);
      }
    } else {
      // Handle the case where searchKeyword is empty
      console.warn('Search keyword is empty');
    }
  };
  

  
  return (
    <>
      <div class="font-sans flex my- mx-3 space-x-4 place-content-around ...">
        <div className="my-3 mx-3">
          <NavLink to="/" activeClassName="active">
            <img src={Logo} className="h-12 w-auto pr-2  md " alt="img logo" />
          </NavLink>
        </div>

        <div className=" flex md  text-center h-14 pl-4 flex my-4 mx-3 space-x-4 justify-center   ... ">
          
          <div className="     ...  ">
          <div className="flex md text-center h-14 pl-4 flex my-4 mx-3 space-x-4 justify-center ...">
          <div className="flex md text-center h-14 pl-4 flex my-4 mx-3 space-x-4 justify-center ...">
          {/* <GoSearch className="h-14 w-7 inline-block pt-1 text-rose-500" /> */}
          {/* <input
            type="text"
            id="searchInput" // Unique ID for referencing in the handleSearch function
            placeholder="Search Here"
            className="w-96 px-4 h-11 text-base border border-rose-500 rounded-3xl"
          />
          <button className="text-rose-500" onClick={handleSearch}>
            <GoSearch className="h-6 w-6" />
          </button> */}
          <Search1 />
        </div>

</div>

          </div>
        </div>

        <div class="flex w-62 h-14  md justify-center my-3 mx-3 space-x-2  ...">
          <FiUser className="h-10 w-6 text-rose-500" />{" "}
          <FaOpencart className="h-10 w-6 text-rose-500" />{" "}
          <FaShopify className="h-10 w-6 text-rose-700 " />
        </div>
      </div>
    </>
  );
};

export default Header;
