import React from 'react'
import {motion} from 'framer-motion'

const Text = () => {
  return (
    <div>
        <div className='main py-9 border-t items-center flex xl:flex-row flex-col sm:flex-row sm:justify-between gap-4 justify-center xl:justify-between border-white'>
             <motion.div 
            initial={{
              x:-100
            }}
            whileInView={{
               x:0
            }}
            transition={{
              duration:1
            }}
             className='xl:text-7xl text-4xl font-bold pt-20   text-[#BAE801] uppercase'>
                <h1 className='leading-[70px]'>we create</h1>
                <h1 className='leading-[70px]'>impactfull</h1>
                <h1 className='leading-[70px]'>experiences for our</h1>
                <h1 className='leading-[70px]'>clients customers</h1>
                <h1 className='leading-[70px]'>every time they</h1>
                <h1 className='leading-[70px]'>engage with a</h1>
                <h1 className='leading-[70px]'>brand</h1>
             </motion.div>
             <motion.div 
            initial={{
              x:100
            }}
            whileInView={{
               x:0
            }}
            transition={{
              duration:1
            }}>
                <div className=' flex justify-center items-center  flex-col rounded-full'>
                 <video loop autoPlay muted src="spin.mp4 "></video>
                 <p className='text-xl text-gray-500'>we take pride in our client success stories ,where our creative <br /> straegies and execution have played a virtul role in achiving their <br /> bussiness goal and surpassing expectation.</p>
                </div>
             </motion.div>
        </div>
    </div>
  )
}

export default Text