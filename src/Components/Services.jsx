// import React from 'react'
import ServiceComponents from "../BaseComponents/ServiceComponents";
import { services } from "../Constants";
const Services = () => {
  return (
    <section
      id="services"
      className="max-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4"
    >
      {services.map((service) => (
        <ServiceComponents key={service.label} {...service}></ServiceComponents>
      ))}
    </section>
  );
};

export default Services;
