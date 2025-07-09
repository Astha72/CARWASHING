import React from 'react';
import {
  Building2,
  PanelsTopLeft,
  DoorOpen,
  LayoutTemplate,
  Ruler,
  Hammer
} from 'lucide-react';

const services = [
  { icon: <Building2 size={40} />, title: 'Aluminum Fabrication', description: 'Durable and modern aluminum doors, windows, and partitions for homes and offices.' },
  { icon: <PanelsTopLeft size={40} />, title: 'ACP & Glazing', description: 'Expert ACP cladding and glazing work for a sleek, weather-resistant finish.' },
  { icon: <DoorOpen size={40} />, title: 'Sliding Doors & Windows', description: 'Smooth, space-saving sliding systems using premium-grade aluminum.' },
  { icon: <LayoutTemplate size={40} />, title: 'Glass Cabins & Partitions', description: 'Toughened glass installations for elegant office and cabin divisions.' },
  { icon: <Ruler size={40} />, title: 'Custom Design & Installation', description: 'Tailor-made fabrication solutions to match your architectural vision.' },
  { icon: <Hammer size={40} />, title: 'Steel Railing Work', description: 'Sturdy and stylish steel railings crafted with precision and safety.' }
];

const WhatWeOffer = () => {
  return (
    <section id="offer" className="px-6 py-20 md:px-16 bg-white">
      <h4 className="text-red-600 font-bold mb-2 uppercase text-center">What We Offer</h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Premium Aluminum & Glass Fabrication Services
      </h2>
      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        From custom aluminum solutions to elegant glass partitions and ACP cladding — we deliver
        reliable, modern designs tailored for lasting impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-blue-950 text-white flex flex-col items-center p-10 text-center min-h-[250px] rounded-xl shadow"
          >
            <div className="mb-4 text-yellow-400">{service.icon}</div>
            <h3 className="text-lg font-semibold text-yellow-400">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
