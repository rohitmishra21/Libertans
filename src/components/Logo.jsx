import React from "react";

const Logo = () => {
  return (
    <div className="">
      <div className="flex flex-col xl:flex-row justify-center gap-10 xl:gap-20 pt-6 xl:opacity-50 items-center">
        <img src="./champion.png" alt="" className="w-36 h-36 object-cover" />
        <img src="./jeep.png" alt="" className="w-36 h-36 object-cover" />
        <img src="./gill.png" alt="" className="w-36 h-36 " />
        <img src="./sportify.png" alt="" className="w-36  " />
      </div>

      <div className="xl:flex flex-col xl:flex-row  justify-center xl:-mt-20   hidden items-center xl:opacity-50  xl:gap-20">
        <img src="./net.png" alt="" className=" object-cover" />
        <img src="./coca.png" alt="" className=" h-32  object-cover" />
        <img src="./he.png" alt="" className=" h-12  hidden xl:block object-cover" />
        <img src="./all.png" alt="" className=" h-12   object-cover" />
      </div>
    </div>
  );
};

export default Logo;
