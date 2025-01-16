import React from 'react'
import mainbanner from '../assets/banner1.png'
import subbannerone from '../assets/subBanner.png'
import subbanner2 from '../assets/subBanner2.jpeg'

function Banner() {
  return (
    <div className='banner-container  bg-gray-200 min-h-96 flex justify-center items-center'>
        {/* Main Banner */}
        <div className='main-banner ml-12 w-6/12 min-h-64 mr-10 p-6 cursor-pointer'> 
            <img src={mainbanner} className='min-h-64 w-full' />
        </div>
        {/* Sub Banners */}
        <div className='sub-banner w-2/12 mr-16 min-h-52 flex flex-col gap-2'>
            <img src={subbannerone} className='w-full h-48 object-cover cursor-pointer' /> 
            <img src={subbanner2} className='w-full object-cover cursor-pointer mt-6' /> 
        </div>
    </div>
  )
}

export default Banner
