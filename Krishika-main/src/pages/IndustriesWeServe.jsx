import React from "react";
import { Home, Building2, Factory, Landmark } from "lucide-react";
import BlogKnowledgeCenter from './BlogKnowledgeCenter';

const industries = [
  {
    icon: <Home size={40} className="text-indigo-600" />,
    title: "Residential",
    description: "Customized fabrication solutions for homes, apartments, and private villas."
  },
  {
    icon: <Building2 size={40} className="text-indigo-600" />,
    title: "Commercial",
    description: "Expertise in glass facades, office partitions, and shopfront fittings."
  },
  {
    icon: <Factory size={40} className="text-indigo-600" />,
    title: "Industrial",
    description: "Reliable metalwork for warehouses, plants, and heavy-duty industrial structures."
  },
  {
    icon: <Landmark size={40} className="text-indigo-600" />,
    title: "Government Contracts",
    description: "Experience in public infrastructure and government-certified projects."
  }
];

const IndustriesWeServe = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
          Industries We <span className="text-indigo-600">Serve</span>
        </h2>
        <p className="mb-12 text-gray-600 text-center max-w-2xl mx-auto">
          Our versatile expertise spans across residential, commercial, industrial, and public sector projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 text-center sm:text-left"
            >
              <div className="flex justify-center sm:justify-start mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        
      </div>
    </section>
  );
};

export default IndustriesWeServe;
