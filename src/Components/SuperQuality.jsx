// import React from 'react'
import Button from "../BaseComponents/Button";
import { shoe8 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col justify-evenly">
        <h2 className="font-bold text-4xl sm:text-left text-center">
          We Provide You <span className="text-coral-red">Super</span> <br />{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 sm:text-left text-center info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 sm:text-left text-center info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="flex mt-10 sm:justify-starts justify-center">
          <Button label="View-details"></Button>
        </div>
      </div>
      <div className="flex-1 justify-center items-center sm:flex hidden">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
