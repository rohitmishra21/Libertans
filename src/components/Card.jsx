import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Text from "./Text";
const Card = () => {
  return (
    <>
      <div className="xl:min-h-[200vh] overflow-x-hidden  w-full bg-black text-white px-8 rounded-t-[50px] ">
        <div className="flex flex-col xl:gap-0 gap-3   xl:justify-between xl:items-center px-7 py-12 border-b border-white/40">
          <h1 className="xl:text-7xl text-3xl font-bold">Our Expertise</h1>
          <h1>
            Transform ideas into reality boy combining <br />{" "}
            creativity,stratgy,and Expertise
          </h1>
        </div>
        <div className="cards xl:w-full xl:h-[80vh]  md:grid md:grid-rows-3 gap-3  py-12 xl:px-16 xl:grid flex flex-col grid-rows-3 xl:grid-cols-3">
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="one bg-[#2E2E2E] rounded-[40px] md:h-[100vh]  xl:h-[70vh] h-[70vh]  px-8 flex flex-col gap-5 "
          >
            <div className="flex  justify-between items-center py-6 border-b border-white ">
              <h1 className="text-5xl font-semibold text-[#BEEB01]">
                Market <br /> Reserch{" "}
              </h1>
              <div className="p-2 bg-[#454545] rounded-full">
                <FiArrowUpRight size={60} />
              </div>
            </div>
            <div>
              <p className="text-gray-400">
                Blends consumer behavior and economic <br /> trends to confirm
                and improve business idea
              </p>
            </div>
            <div className=' xl:h-60 md:h-[60vh] h-60 rounded-[40px] bg-cover bg-center bg-[url("https://cdn-empmerch.newjobs.com/wp-content/uploads/2021/04/consultant-meeting-with-clients.png.webp")]'></div>
          </motion.div>

          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="two relative bg-[#601FEB] xl:h-[70vh]  md:h-[100vh] h-[70vh]    px-8 flex flex-col gap-5 rounded-bl-[200px] rounded-[40px]"
          >
            <div className="flex justify-between items-center py-6 border-b border-white ">
              <h1 className="text-5xl font-semibold text-[#BEEB01]">
                Branding <br /> stretgies{" "}
              </h1>
              <div className="p-3 bg-[#B9E901] left-0 text-[#5E1DEE] border-[6px] border-black bottom-4 absolute rounded-full">
                <FiArrowUpRight size={70} />
              </div>
            </div>
            <div>
              <p className="text-gray-400">
                Build identification and favorability with <br /> customer and
                potential coustomers
              </p>
            </div>
            <div className=' xl:h-60 rounded-bl-[200px] h-60 md:h-[60vh] rounded-[10px] bg-cover bg-center bg-[url("https://images.pexels.com/photos/3797928/pexels-photo-3797928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'></div>
          </motion.div>

          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="three bg-[#2E2E2E] xl:h-[70vh]  md:h-[100vh] h-[70vh]   rounded-[40px] px-8 flex flex-col gap-5 "
          >
            <div className="flex justify-between items-center py-6 border-b border-white ">
              <h1 className="text-5xl font-semibold text-[#BEEB01]">
                Branding <br /> stretgies{" "}
              </h1>
              <div className="p-2 bg-[#454545] rounded-full">
                <FiArrowUpRight size={60} />
              </div>
            </div>
            <div>
              <p className="text-gray-400">
                Build identification and favorability with <br /> customer and
                potential coustomers
              </p>
            </div>

            <div className=' xl:h-60 h-60  rounded-[40px]  md:h-[60vh] bg-cover bg-center bg-[url("https://www.fortunate-media.com/wp-content/uploads/2023/04/seo.png")]'></div>
          </motion.div>
        </div>

        <Text />
      </div>
    </>
  );
};

export default Card;
