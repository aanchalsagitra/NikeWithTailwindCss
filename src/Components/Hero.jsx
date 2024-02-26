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
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ml-5"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover Stylish Nike Arrivals,quality,comfort and innovation for your
          active life
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
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

      <div className="hidden sm:block md:block lg:block xl:block relative flex-1 flex flex-col justify-center items-center w-full xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover ">
        <img
          src={shoeImg}
          alt="shoe-collection"
          width={650}
          height={500}
          className="object-contain relative z-20 w-full min-w-[230px] max-w-[650px]"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            // <div key={shoe.bigShoe}>
            <ShoeCard
              key={shoe}
              imgURL={shoe}
              bigShoeImg={shoeImg}
              changeBigShoeImg={(shoeImgUpdate) => setShoeImg(shoeImgUpdate)}
            ></ShoeCard>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
