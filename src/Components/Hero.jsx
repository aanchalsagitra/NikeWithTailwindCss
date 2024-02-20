// import React from 'react'
import { arrowRight } from "../assets/icons";
import Button from "./Button";
import { statistics } from "../Constants";
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col  min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col w-full max-xl: padding-x pt-28">
        <p className="text-xl font-montserrat text-[#FF6452]">Our Summer Collection</p>
        <h1 className="text-6xl font-bold mt-10 max-sm:text-[72px] max-sm: leading-30">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-[#FF6452] inline-block mt-3 mr-3">Nike</span> Shoes
        </h1>
        <p className="mt-4 mb-5 font-medium text-slate-500 "> 
          Discover Stylish Nike Arrivals,quality,comfort and innovation for your
          active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
      </div>
      <div className="flex justify-starts item-start flex-wrap w-full mt-15 gap-16 max-sm:ml-12 ml-20 ">
        {statistics.map((statistic) => (
          <div key={statistic.label} className="flex flex-col justify-center item-center ">
            <p className="text-4xl font-bold">{statistic.value}</p>
            <p className="text-slate-500 font-normal">{statistic.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
