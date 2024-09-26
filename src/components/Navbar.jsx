import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex py-2 px-3 justify-between xl:px-8 font-medium shadow-sm shadow-black/20 xl:h-20 w-full items-center capitalize'>
        <div className='flex text-xs xl:text-xl gap-2 xl:gap-9'>
            <span className='hidden sm:block xl:block'>how it works</span>
            <span>service</span>
            <span >client</span>
        </div>
        <div className='flex gap-1 items-center'>
            <img src="https://www.logoai.com/oss/icons/2021/10/27/Wa5nh-at4IYUN74.png" className='xl:w-7 w-5 object-cover' alt="" />
            <h1 className='xl:text-2xl font-bold'>Libertance</h1>
        </div>
        <div className='flex items-center gap-6'>
             <h3 className='text-xs xl:text-xl'>FaQ</h3>
             <div className='xl:px-5 flex items-center py-1 px-2  xl:gap-2 justify-between  xl:py-2.5 xl:font-bold xl:text-sm text-xs rounded-full border-[#B9E903] border-2'>
             <h4 className=''>Get Started</h4>
             <IoArrowForwardSharp  size={15} className='text-[#5E1FEB]'/>
             </div>
          </div>
    </div>
  )
}

export default Navbar