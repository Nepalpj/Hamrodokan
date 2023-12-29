// SearchResults.js

import React from "react";

const SearchResults = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((result, index) => (
          <li key={result._id}>
            {result?.productName} - {result?.description}
            <img
              className="w-32 h-32 object-cover rounded-sm transition duration-500 ease-in-out transform 
              hover:-translate-y-1 hover:scale-105 sm:mb-4 cursor-pointer"
              src={result.productImg.url}
              alt={result.productName}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
