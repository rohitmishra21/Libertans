import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import Hero from './Hero';


const Loader = () => {
  
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const tl = gsap.timeline()

      tl.to(".box-1",{
        y:"120%",
        opacity:0,
        duration:1,
        delay:0.4
      })
      tl.to(".box-2",{
        y:"-120%",
        opacity:0,
        duration:1
      })
      tl.to(".loded",{
        y:"-120%",
        duration:0.5,
        onComplete: () => {
          setLoading(false);
        }
      })

  }, [])
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'not-allowed'; 
    } else {
      document.body.style.overflow = 'auto'; 
      document.body.style.cursor = 'default'; 
    }
  }, [loading]);
  return (

<>
  {loading ?  <div className='loded  w-full fixed pointer-events-none  top-0 z-50 items-end  justify-center flex h-screen bg-white'>
        <div className='box-1 w-[50%] shadow-md shadow-black absolute z-20 left-48 h-[90vh]'>
            <img src="./loader-1.png" alt=""  className='w-full h-full object-cover' />
        </div>
        <div className='box-2 w-[50%] shadow-md shadow-black absolute right-48  h-[100vh]'>
           <img src="./loader-2.png" alt="" className='w-full h-full object-cover' />
        </div>
   </div> :
   <Hero/>
   }

   
</>
    
  )
}

export default Loader