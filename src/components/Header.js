import React, { useState } from 'react';
import Logo from '../assets/logo.png'; // Adjust the path based on the actual location

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Header bg-white border-b-2 border-gray-300 shadow-lg">
      {/* Top Section: Logo, Search, and Contact */}
      <div className="flex items-center border-gray-200 border-b-2 justify-between p-4 md:justify-start">
        {/* Logo */}
        <div className="logo w-32 ">
          <img src={Logo} alt="Logo" className="h-12" />
        </div>

        {/* Search Bar */}
        <div className="search flex-1 mx-4 hidden md:flex">
          <input
            className="w-full h-10 border border-gray-300 focus:outline-none focus:ring-0 pl-4"
            type="text"
            placeholder="Search Product..."
          />
          <button className="w-12 h-10 bg-green-500 rounded-sm flex justify-center items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Contact Info */}
        <div className="contact hidden md:flex items-center">
          <div className="text-right pr-8">
            <p className="font-bold">+91 90920 47795</p>
            <p className="text-gray-600 text-sm">Call us Free</p>
          </div>
          <div>
            <p className="font-bold">FREE SHIPPING</p>
            <p className="text-gray-600 text-sm">ON ORDER OVER ₹199</p>
          </div>
          <div className='left-icons flex ml-4 p-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4 "><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
            <p className='ml-6'>₹24,083</p>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="menu-toggle md:hidden text-gray-800"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="menu bg-white border-t border-gray-200 shadow-md p-4 md:hidden">
           <div className='left-icons flex ml-4 p-2 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4 "><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
              <p className='ml-6'>₹24,083</p>
            </div>
          <div className="search flex mb-4">
            <input
              className="w-full h-10 border border-gray-300 focus:outline-none focus:ring-0 pl-4"
              type="text"
              placeholder="Search Product..."
            />
            <button className="w-12 h-10 bg-green-500 rounded-sm flex justify-center items-center text-white ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          <div className="menu-items flex flex-col space-y-2">
            {["Home", "About", "Shop", "Blog", "Page", "Contact"].map(
              (item, index) => (
                <p
                  key={index}
                  className="text-gray-800 font-bold text-center py-2 border-b"
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center bg-gray-100 py-2">
        {["Home", "About", "Shop", "Blog", "Page", "Contact"].map(
          (item, index) => (
            <p
              key={index}
              className="text-gray-800 font-bold px-4 py-1 hover:text-green-500 cursor-pointer"
            >
              {item}
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default Header;
