import React from "react";
import notfound from "../../assets/images/notfound.png";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <h1 className="text-center text-5xl">404 Page Not Found!</h1>
      <div className="flex justify-center mt-16 ">
        <div className="flex ...">
          <img src={notfound} alt="notfound" className="animate-moveUpDown" />
        </div>
      </div>
      <div className="flex h-10 justify-center mt-3 mb-3">
        <NavLink to="/" className="active flex">
          <button className="text-2xl text-gray-50 w-32  bg-rose-600 border rounded-3xl ">
            HOME
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default PageNotFound;
