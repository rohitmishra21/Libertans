import React from "react";
import Logo from "./Logo";

const Work = () => {
  return (
    <div className="min-h-[150vh] w-full ">
      <div className="xl:py-24 py-12 px-8">
        <h1 className="text-purple-900 uppercase text-sm  font-bold">
          recent work
        </h1>
        <p className="pt-7 text-4xl font-semibold">
          Through meticulous planning,seemless execution, <br />
          and creative problem-solveing, we achieved <br /> remarkable project
          sucess.
        </p>
      </div>
      <div className="xl:h-[200vh] xl:flex xl:flex-row  sm:gap-7 sm:flex sm:flex-col sm:justify-center sm:items-center overflow-hidden  w-full">
        <div className="left gap-32 xl:px-20 px-8 flex flex-col  xl:w-1/2">
          <div>
            <div className="box h-[60vh] w-[80vh] bg-cover bg-center xl:rounded-[40px] bg-[url('https://static.wixstatic.com/media/3edd6b_d13fa549f5a2482f9d75e4437754d768~mv2.jpg/v1/fill/w_594,h_396,fp_0.54_0.59,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-valeriia-miller-3685530_edited.jpg')] bg-pink-800"></div>
            <h1 className="py-5 text-4xl text-[#6320ed]  font-semibold">
              The Ordinary
            </h1>
            <h3 className="text-slate-700 font-medium text-lg">
              DesignDegital,webContent,Campaigns Events & Activation
            </h3>
          </div>

          <div className="">
            <div className="box h-[60vh] w-[80vh]  bg-cover bg-center xl:rounded-[40px] bg-[url('https://images.unsplash.com/photo-1598571218239-4bf840970050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D')] bg-pink-800"></div>
            <h1 className="py-5 text-4xl text-[#6320ed]  font-semibold">
              Apple Inc
            </h1>
            <h3 className=" font-medium text-slate-700 text-lg">
              DesignDegital,webContent,Campaigns Events & Activation,Brand{" "}
              <br /> Stretgy,VoiceBranding
            </h3>
          </div>
        </div>
        <div className="right relative  px-8 xl:px-32 xl:flex flex-col  xl:w-1/2">
          <img
            src="./logo2.png"
            alt=""
            className="xl:absolute xl:block hidden bottom-[26%] rotate-3 w-[400px] right-0 translate-x-[20%]  z-30"
          />
          <div className="xl:pt-32 pt-10">
            <div className="box h-[60vh] w-[80vh]  bg-cover bg-center xl:rounded-[40px] bg-[url('https://jbh.co.uk/wp-content/uploads/2019/02/lalo-hernandez-972564-unsplash-scaled.jpg')] bg-pink-800"></div>
            <h1 className="py-5 text-4xl text-[#6320ed]  font-semibold">
              The Ordinary
            </h1>
            <h3 className="text-slate-700 font-medium text-lg">
              DesignDegital,webContent,Campaigns Events & Activation
            </h3>
          </div>
          <div className="pt-10">
            <div className="box h-[60vh] w-[80vh]   xl:rounded-tr-full relative  overflow-hidden bg-cover bg-right xl:rounded-[40px] bg-[url('https://images.unsplash.com/photo-1572294723031-2aaf17070dbd?mark=https://images.unsplash.com/opengraph/logo.png&mark-w=64&mark-align=top,left&mark-pad=50&h=630&w=1200&crop=faces,edges&blend-w=1&blend=000000&blend-mode=normal&blend-alpha=10&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzI1MjY5NDE3fA&ixlib=rb-4.0.3')] bg-pink-800"></div>

            <h1 className="py-5 text-4xl text-[#6320ed]  font-semibold">
              Apple Inc
            </h1>
            <h3 className=" font-medium text-slate-700 text-lg">
              DesignDegital,webContent,Campaigns Events & Activation,Brand{" "}
              <br /> Stretgy,VoiceBranding
            </h3>
          </div>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default Work;
