import React, { useState } from "react";
import axios from "axios";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

const Search1 = () => {
  // State management for search functionality
  const [searchKeyword, setSearchKeyword] = useState(""); // State for the search keyword
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [loading, setLoading] = useState(false); // State to handle loading state

  // Function to handle the search
  const handleSearch = async () => {
    setLoading(true); // Set loading to true while fetching data

    try {
      // Make an API request to fetch products based on the search keyword
      const response = await axios.get(
        `http://localhost:4000/api/v1/all/products?keyword=${searchKeyword}`
      );

      if (response.status === 200) {
        // If the API request is successful 
        setSearchResults(response.data.products);
        console.log("Search results:", response.data); // Log the search results to the console
      }
    } catch (error) {
      // If there's an error during the API request, log the error
      console.error("Error searching:", error);
    } finally {
      setLoading(false); // Reset the loading state regardless of success or failure
    }
  };

  return (
    <div >
      {/* Input field for entering the search keyword */}
      <input
      className =
      "w-96 px-4 h-11 text-base border border-rose-500 rounded-3xl"
        type="text"
        id="searchInput" // Unique ID for referencing in the handleSearch function
        placeholder="Search Here"
        
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value); // Update the searchKeyword state as the user types

          
        }}
      />

      {/* Button to trigger the search */}
      <Link to={"/search-results"}>
      <button onClick={handleSearch}>    
        <GoSearch className="h-14 w-7 inline-block pt-1 text-rose-500" />
       </button>

      </Link>
      {/* Display a loading message when loading state is true */}
      {loading && <p>Loading...</p>}

      {/* Display search results if there are any */}
      {searchResults.length > 0 && (
         <div className="container bg-{#f5f5f5} mx-auto py-8 m-32">
        <div className="bg-{#fff} flex  flex-col items-center p-4 space-y-2 my-5">
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((result, index) => (
            <li key={result._id}>
              {/* Display product details from the search results */}
              <Link to = {`/product/details/${result._id}`} >

              <img
                className="w-32 h-32 object-cover rounded-sm transition duration-500 ease-in-out transform 
                hover:-translate-y-1 hover:scale-105 sm:mb-4 cursor-pointer"
                src={result.productImg.url}
                alt={result.productName}
                />
              <h2>{result?.productName}</h2> 
               <p className='text-slate-500'>{result?.description}</p>
               <p className='font-bold'>Rs {result?.price}</p>
                </Link>

            
            </li>
          ))}
        </ul>
      </div>
          </div>
      
    )}
    
  </div>
  );
};

export default Search1;
