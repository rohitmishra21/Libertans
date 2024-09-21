import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex  justify-between px-8 font-medium shadow-sm shadow-black/20 h-20 items-center capitalize'>
        <div className='flex gap-9'>
            <span>how it works</span>
            <span>service</span>
            <span>client</span>
        </div>
        <div className='flex gap-1 items-center'>
            <img src="https://www.logoai.com/oss/icons/2021/10/27/Wa5nh-at4IYUN74.png" className='w-7 object-cover' alt="" />
            <h1 className='text-2xl font-bold'>Libertance</h1>
        </div>
        <div className='flex items-center gap-6'>
             <h3>FaQ</h3>
             <div className='px-5 flex items-center  gap-2 justify-between py-2.5 font-bold text-sm rounded-full border-[#B9E903] border-2'>
             <h4 className=''>Get Started</h4>
             <IoArrowForwardSharp  size={15} className='text-[#5E1FEB]'/>
             </div>
          </div>
    </div>
  )
}

export default Navbar