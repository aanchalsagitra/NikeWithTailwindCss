// import React from 'react'

import Button from "../BaseComponents/Button";

const Subscription = () => {
  return (
    <section
      id="subscription"
      className="flex sm:justify-between justify-center"
    >
      <div>
        <h2 className="text-4xl font-bold">
          Sign Up from <br /> <span className="text-coral-red">Updates</span> &
          Newsletter
        </h2>
      </div>
      <div className="lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="email"
          name=""
          id=""
          placeholder="subscribe@nike.com"
          className="border-none mt-1 bg-transparent"
        />
        <button className=" px-7 py-4 border font-montserrat rounded-full border-black text-lg leading-none w-fit mt-4  bg-coral-red">
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Subscription;
