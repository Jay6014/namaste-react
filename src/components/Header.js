import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {LOGO_URL} from "../utils/constants";
import {CART_ICON_URL} from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

/*

Using normal css
-----------------
const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className = "logo" alt="logo" src= {LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus === true ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                         <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="cartContainer" style={{padding: "10px",}}>
                        <img className = "cart-img" alt="cart-img" src={CART_ICON_URL}></img>
                    </li>
                    <button onClick={()=>{
                        {setBtnName(btnName === "Logout" ? "Login" : "Logout")} // as soon as i clicked on this button react updated btnName and also refreshes the whole header component once again with updated btnName.
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;

*/

// using tailwindcss
const Header = () =>{
    const [btnName, setBtnName] = useState("Logout");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=> store.cart.items);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img alt="food-logo" className="w-28" src={LOGO_URL} />
        </div>

        {/* Hamburger - Mobile */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100 transition"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex sm:items-center sm:space-x-6">
          <span className="flex items-center">
            Online Status: <span className="ml-1">{onlineStatus ? "🟢" : "🔴"}</span>
          </span>
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>
          <Link to="/about-us" className="hover:text-orange-500 transition">
            About Us
          </Link>
          <Link to="/contact-us" className="hover:text-orange-500 transition">
            Contact Us
          </Link>
          <Link to="/grocery" className="hover:text-orange-500 transition">
            Grocery
          </Link>
          <Link to="/cart" className="relative">
            <img className="w-8" alt="cart-img" src={CART_ICON_URL} />
            <span className="absolute -top-2 md:-right-2 bg-orange-600 text-white text-xs font-bold rounded-full px-2 py-1">
                {cartItems.length}
            </span>
        </Link>

          <button
            className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm hover:bg-orange-600 transition"
            onClick={() => setBtnName(btnName === "Logout" ? "Login" : "Logout")}
          >
            {btnName}
          </button>
          <span>{loggedInUser}</span>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden border-t border-gray-200 bg-white shadow-md">
          <ul className="flex flex-col px-4 py-2 space-y-3">
            <li className="flex items-center">
              Online Status: <span className="ml-2">{onlineStatus ? "🟢" : "🔴"}</span>
            </li>
            <li>
              <Link to="/" className="block hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="block hover:text-orange-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="block hover:text-orange-500 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="block hover:text-orange-500 transition">
                Grocery
              </Link>
            </li>
            <li className="relative">
              <Link to="/cart" className="block">
                <img className="w-8" alt="cart-img" src={CART_ICON_URL} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full px-2 py-1">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <button
                className="w-full bg-orange-500 text-white px-3 py-2 rounded-md text-sm hover:bg-orange-600 transition"
                onClick={() => setBtnName(btnName === "Logout" ? "Login" : "Logout")}
              >
                {btnName}
              </button>
            </li>
            <li className="text-center">{loggedInUser}</li>
          </ul>
        </div>
      )}
    </header>
    )
}

export default Header;