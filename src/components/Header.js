import React from 'react'
import Logo from '../assets/logo.png'; // Adjust the path based on the actual location

function header() {
  return (
    <div className='Header h-24 bg-white border-b-2 border-gray-200 flex ' >
        {/* logo div */}
        <div className='logo w-60 bg-white border-b-2 border-gray-200 border-r-2 flex justify-end'>
          <img src={Logo} className='h-24 p-2 mr-4 rounded-2xl' />
        </div>
        <div className='right-header h-12 w-full '>
          <div className='top'>
              <div className='search flex pt-4 ml-14'>
                <input  className="w-full h-10 border border-gray-300 focus:outline-none focus:ring-0 pl-4"  type='text' placeholder='  Search Product...'></input>
                <button className='w-12 h-10 bg-green-500 rounded-sm flex text-white p-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-lg"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                </button>
                <div className='contact w-full  flex'>
                  <div className='pl-8 pr-8'>
                    <p className='font-bold'>+91 90920 47795</p>
                    <p className='text-gray-600 text-sm '>Call us Free</p>
                  </div>
                  <div>
                    <p className='font-bold'>FREE SHIPPING</p>
                    <p className='text-gray-600 text-sm '>ON ORDER OVER ₹199</p>
                  </div>
                  <div className='left-icons flex ml-4 p-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-4 "><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                    <p className='ml-6'>₹24,083</p>
                  </div>
                </div>
              </div>
          </div>
          <div className='down h-10 p-2 ml-12'>
              <div className='menu flex'>
                <p className='flex pr-8 font-bold cursor-pointe text-sm'>Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-stone-500 ml-2 mt-1"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></p>
                <p className='flex pr-8 font-bold cursor-pointer text-sm'>About <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-stone-500 ml-2 mt-1"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></p>
                <p className='flex pr-8 font-bold cursor-pointer text-sm'>Shop <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-stone-500 ml-2 mt-1"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></p>
                <p className='flex pr-8 font-bold cursor-pointer text-sm'>Blog <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-stone-500 ml-2 mt-1"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></p>
                <p className='flex pr-8 font-bold cursor-pointer text-sm'>Page <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-stone-500 ml-2 mt-1"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></p>
                <p className='flex pr-8 font-bold cursor-pointer text-sm'>Contact</p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default header
