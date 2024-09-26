import React from "react";
import { motion } from "framer-motion";
const Fotter = () => {
  return (
    <div className="xl:min-h-screen mt-20 xl:mt-0 text-white bg-gray-950 xl:px-8 rounded-[40px]">
      <motion.div
       initial={{
        y:-100
       }}
       whileInView={{
        y:0
       }}
       transition={{
         duration:1
       }}
      className=" py-20 border-b border-white/35 ">
        <h1 className="text-center text-xl font-bold text-[#B8E702]">
          Start crafting your brand story
        </h1>
        <div className="xl:text-8xl pt-7 font-serif   uppercase text-center">
          <h1>partner us to create </h1>
          <div className="flex justify-center">
            <h1>a</h1>
            <motion.div
              initial={{
                scale: 0,
                rotate: 0,
              }}
              whileInView={{
                scale: 1,
                rotate: 5,
              }}
              transition={{
                duration: 1,
              }}
              className="bg-[#B9E901]  text-black rounded-3xl rotate-3"
            >
              <h1 className="xl:leading-[110px] py-1 px-3 ">Compelling </h1>
            </motion.div>
            <h1>nattive</h1>
          </div>
          <h1>for your brand !</h1>
        </div>
        <p className="text-center pt-7 text-sm text-gray-500">
          lets bring your ideas to lif, start collaborating with our creative{" "}
          <br /> agency and turn vision in reality
        </p>
      </motion.div>
      <div className="fotter xl:flex sm:flex justify-between md:py-9 lg:py-8 sm:py-7 py-3 xl:py-10 px-8">
        <div>
          <h1 className="text-2xl font-bold py-2 text-[#b8e702]">Libertans</h1>
          <h1>35 N Deaborn ST, Chicago,IL 60601 USA</h1>
          <h1>+1-202-555-0156,(555)555-1234</h1>
          <h1>info@libertans.com</h1>
        </div>
        <div className="xl:py-5 xl:block ">
          <div className="flex justify-center pt-4 items-center gap-4">
            <h1 className="px-4 py-2 text-center border-2 border-white/30 rounded-full">
              Market reserch
            </h1>
            <h2 className="px-4 py-2 text-center border-2 border-white/30 rounded-full">
              Ads Production
            </h2>
            <h2 className="px-4 py-2 text-center border-2 border-white/30 rounded-full">
              branding stretges
            </h2>
          </div>
          <div className="flex items-end xl:justify-end justify-between sm:justify-end py-4 xl:gap-9 text-white/40">
            <h1>Privacy & Cookie Policy</h1>
            <h1>Libertans ©2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
