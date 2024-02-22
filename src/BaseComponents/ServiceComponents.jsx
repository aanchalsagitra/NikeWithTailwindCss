// import React from 'react'

const ServiceComponents = (props) => {
  return (
    <div className="mt-8 shadow-3xl rounded-[20px] px-10 py-10">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={props.imgURL} alt={props.label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {props.label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {props.subtext}
      </p>
    </div>
  );
};

export default ServiceComponents;
