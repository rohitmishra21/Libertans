import React from "react";
import { GoArrowDown } from "react-icons/go";
import { motion } from "framer-motion";

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{
          y: 100,
        }}
        whileInView={{
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="ohero  xl:min-h-[87vh] pb-12 xl:pl-20 xl:pr-8 relative "
      >
        <div className="flex w-full  items-start  py-12 justify-between xl:px-8">
          <motion.div
            initial={{
              height: "0",
            }}
            whileInView={{
              height: "18rem",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className='h-72  w-72  overflow-hidden xl:opacity-100 opacity-70 rounded-b-full -rotate-[10deg] bg-[url("https://media.istockphoto.com/id/1404639567/photo/pair-of-comfortable-sports-shoes-on-light-green-background.jpg?s=612x612&w=0&k=20&c=rNSajxMECAA210UPqRGKeP2shQGOsM1bkdBfDdFqEss=")] bg-cover bg-center'
          ></motion.div>
          <motion.div 
          initial={{
            width:0
          }}
          whileInView={{
            width:200
          }}
          transition={{
            duration:2
          }}
          className="flex overflow-hidden flex-col gap-1 px-3  items-end  text-[#BFEF0E]">
            <h1 className="bg-[#611DE9] px-3 py-1 xl:text-sm text-xs rounded-full">
              35 N Dearnborn ST
            </h1>
            <h1 className="bg-[#611DE9] px-3 py-1 text-xs  xl:sm rounded-full">
              Chicago
            </h1>
          </motion.div>
        </div>
        <div className="  flex justify-between items-end w-full">
          <div className="right">
            <div className='xl:w-20 xl:h-20 w-12 h-12 bg-cover bg-center bg-no-repeat rounded-full border-4 bg-[url("https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D")] border-[#BFEF0E]'></div>
            <div>
              <p className="text-gray-500 text-xs">
                Amplify brands by crafting unique and compelling <br /> brand
                identites that leave a last impact.
              </p>
            </div>
          </div>
          <div className="flex xl:flex-row flex-col   items-center gap-2 justify-center">
            <h1 className="xl:text-xl z-40 text-xs xl:block hidden font-semibold">
              Scroll Down
            </h1>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-[#6325E7]  p-1 rounded-full text-white "
            >
              <GoArrowDown className="text-sm" />
            </motion.div>
          </div>
          <div>
            <div className=' xl:w-52 xl:h-60 w-32 h-40 xl:opacity-100 opacity-70 rotate-6 bg-black rounded-tr-[500px] bg-no-repeat rounded-[30px] bg-[url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ4_iC5Jx-jxdTRuhcAe0R3ATJXP4FUP6E-vGOQDPkKfZBOuTmj")]'></div>
          </div>
        </div>
        <motion.div
          initial={{
            y: 100,
          }}
          whileInView={{
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
          }}
          className="xl:min-h-[90vh] min-h-[50vh] flex justify-center items-end py-32 absolute top-0 left-0 w-full"
        >
          <div className="text-center sm:text-6xl text-4xl   xl:text-9xl font-bold leading-none">
            <h1 className="xl:text-2xl xl:text-gray-500 text-xs font-sans pb-10 text-gray-800 xl:pb-0  uppercase xl:font-normal">
              crafting experiences that Inspire
            </h1>
            <h1>Elevent Your</h1>
            <div className="flex gap-3 xl:gap-9 justify-center text-4xl sm:text-6xl items-center">
              <h1 className="leading-[80px] xl:text-9xl">Breand</h1>
              <div className='xl:w-28 xl:h-28 w-12 h-12 bg-cover bg-center rounded-full border-4 bg-[url("https://www.logoai.com/oss/icons/2021/10/27/Wa5nh-at4IYUN74.png")] border-[#BFEF0E]'></div>
              <h1 className="leading-[80px] xl:text-9xl">with our</h1>
            </div>
            <div className="flex justify-center gap-5 xl:text-9xl text-4xl sm:text-6xl xl:gap-12">
              <motion.div 
              initial={{
                scale:0,
                rotate:0
              }}
              whileInView={{
                scale:1,
                rotate:5

              }}
              viewport={{
                once:true
              }}
              transition={{
                duration:1
              }}
              className="bg-[#B9E901] text-white rounded-3xl rotate-3">
                <h1 className="xl:leading-[110px] py-1 px-3 ">Creative </h1>
              </motion.div>
              <h1 className="xl:text-9xl">magic</h1>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
