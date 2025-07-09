import React from 'react';
import welding from '../assets/welding.png';
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
            Trusted Solutions for Aluminum <br /> Fabrication & Glazing Work
          </h2>
          <p className="text-gray-700 mb-6">
            We specialize in Jindal and Hindalco aluminum works — from sliding doors and windows to ACP cladding,
            glass partitions, and steel railings. Our team delivers functional, stylish, and durable fabrication tailored
            for homes, offices, and commercial buildings.
          </p>
         
        </div>
      </div>

      
    </section>
  );
};

export default Services;
