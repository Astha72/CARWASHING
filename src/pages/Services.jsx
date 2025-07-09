import React from 'react';
import welding from '../assets/car.png';
import WhatWeOffer from './WhatWeOffer';

const Services = () => {
  return (
    <section id="services" className="px-6 py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3">
          <img src={welding} alt="Fabrication Services" className="w-full h-auto object-contain" />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <h4 className="text-red-600 font-semibold mb-2 uppercase">Our Services</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            "Reliable Experts in <br /> Car Wash & Auto Detailing
          </h2>
          <p className="text-gray-700 mb-6">
            We specialize in premium car care — from foam washing and interior vacuuming to ceramic coating, underbody cleaning, and detailing.
Our team delivers thorough, efficient, and reliable services tailored for all vehicle types — ensuring your car looks spotless and stays protected.
          </p>
         
        </div>
      </div>

      
    </section>
  );
};

export default Services;
