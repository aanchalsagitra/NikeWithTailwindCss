// import React from 'react'
import { arrowRight } from "../assets/icons";
import Button from "../BaseComponents/Button";
import ShoeCard from "../BaseComponents/ShoeCard";
import { useState } from "react";
import { statistics, shoes } from "../Constants";
import { bigShoe1 } from "../assets/images";
const Hero = () => {
  const [shoeImg, setShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col  min-h-screen gap-1 max-container "
    >
      <div className="relative xl:w-1/2 flex flex-col w-full max-xl: padding-x pt-28 md:justify-center">
        <p className="text-xl font-montserrat text-[#FF6452]">
          Our Summer Collection
        </p>
        <h1 className=" text-8xl font-bold mt-10 max-sm:text-[72px] max-sm: leading-30">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 font-montserrat pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-[#FF6452] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-10 mt-4 mb-4 sm:max-w-sm ">
          Discover Stylish Nike Arrivals,quality,comfort and innovation for your
          active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className=" mt-12 flex justify-starts item-start flex-wrap w-full gap-16">
          {statistics.map((statistic) => (
            <div
              key={statistic.label}
              className="flex flex-col justify-center item-center "
            >
              <p className="text-4xl font-bold">{statistic.value}</p>
              <p className="text-slate-500 font-normal">{statistic.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={shoeImg}
          alt="shoe-collection"
          width={640}
          height={500}
          className="object-contain relative z-20"
        />
        <div
          className="flex sm:gap-6 gap-4 -bottom-[5%] sm:left-[10%] max-sm:px-6 justify-between
         items-end z-30"
        >
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                bigShoeImg={shoeImg}
                changeBigShoeImg={(shoeImg) => setShoeImg(shoeImg)}
              ></ShoeCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
