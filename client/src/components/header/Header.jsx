import React from "react";
import Logo from "../../assets/images/Na.png";
import { FaCartShopping } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <GoSearch className="h-14  w-7 inline-block pt-1 text-rose-500" />
            <input
              type="text"
              placeholder="Search Here"
              class="w-96 px-4  h-11 text-base border border-rose-500 rounded-3xl "
            />
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
