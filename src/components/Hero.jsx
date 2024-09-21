import React from 'react'
import { GoArrowDown } from "react-icons/go";

const Hero = () => {
  return (
   <>
    <div className='min-h-[87vh] pl-20 pr-8 relative '>
        <div className='flex items-start  py-12 justify-between px-8'>
            <div className='h-72 w-72 rounded-b-full -rotate-[10deg] rounded-md bg-[url("https://media.istockphoto.com/id/1404639567/photo/pair-of-comfortable-sports-shoes-on-light-green-background.jpg?s=612x612&w=0&k=20&c=rNSajxMECAA210UPqRGKeP2shQGOsM1bkdBfDdFqEss=")] bg-cover bg-center'>
            </div>
            <div className='flex flex-col  items-end  text-[#BFEF0E]'>
              <h1 className='bg-[#611DE9] px-3 py-1 rounded-full'>35 N Dearnborn ST</h1>
              <h1 className='bg-[#611DE9] px-3 py-1 rounded-full'>Chicago</h1>
            </div>
        </div>
        <div className='  flex justify-between items-end w-full'>
            <div className='right'>
              <div className='w-20 h-20 bg-cover bg-center rounded-full border-4 bg-[url("https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D")] border-[#BFEF0E]'>
              </div>
              <div>
                <p className='text-gray-500 text-xs'>Amplify brands by crafting unique and compelling <br /> brand identites that leave a last impact.</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <h1 className='text-xl font-semibold'>Scroll Down</h1>
              <div className='bg-[#6325E7] p-1 rounded-full text-white '>
              <GoArrowDown className='text-sm'/>
              </div>
             
            </div>
            <div>
               <div className='bg-red-400 w-52 h-60 rotate-6 rounded-t-full  rounded-l-md bg-[url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4_iC5Jx-jxdTRuhcAe0R3ATJXP4FUP6E-vGOQDPkKfZBOuTmj")]'></div>
            </div>
        </div>
    </div> 
    <div className='min-h-[100vh]  flex justify-center items-end py-32 absolute top-0 left-0 w-full' >
        <div className='text-center    text-9xl font-bold leading-none'>
          <h1 className='text-2xl text-gray-500 font-sans font-normal'>crafting experiences that Inspire;</h1>
          <h1>Elevent Your</h1>
          <div className='flex gap-9 items-center'>
          <h1 className='leading-[80px]'>Breand</h1>
          <div className='w-28 h-28 bg-cover bg-center rounded-full border-4 bg-[url("https://www.logoai.com/oss/icons/2021/10/27/Wa5nh-at4IYUN74.png")] border-[#BFEF0E]'>
          </div>
          <h1 className='leading-[80px]'>with our</h1>
          </div>
          <div className='flex justify-center gap-12'>
            <div className='bg-[#B9E901] text-white rounded-3xl rotate-3'>
            <h1 className='leading-[120px] '>Creative </h1>
            </div>
          <h1>magic</h1>
          </div>
        </div>
    </div>
   </>
  )
}

export default Hero