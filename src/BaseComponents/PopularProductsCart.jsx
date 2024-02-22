// import React from 'react'
import { star } from "../assets/icons";
const PopularProductsCart = ({ imgURL, name, price }) => {
  return (
    <div className="flex sm:flex-col w-full flex-row justify-around ">
      <img
        src={imgURL}
        className="sm:w-[200px] sm:h-[200px] w-[150px] h-[150px]"
        alt="shoe-img"
      />
      <div className="sm:ml-0 ml-4">
        <div className=" mt-8 flex justify-start gap-2.5">
          <img src={star} alt="star-icon" />

          <p className="font-montserrat sm:text-xl leading-normal text-slate-gray text-sm">
            4.5
          </p>
        </div>
        <h3 className="mt-2 sm:text-xl leading-normal font-semibold font-palanquin text-sm">
          {name}
        </h3>

        <p className="mt-2 font-semibold font-montserrat text-coral-red sm:text-2xl leading-normal text-sm">
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductsCart;
