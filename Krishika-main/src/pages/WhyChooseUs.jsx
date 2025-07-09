import React from "react";
import { CheckCircle, Timer, Award, Hammer } from "lucide-react";
import ClientTestimonials from './ClientTestimonials';

const reasons = [
  {
    icon: <Award className="text-indigo-600 w-8 h-8" />,
    title: "10+ Years Experience",
    description: "A decade of expertise in fabrication, glazing, and metal works."
  },
  {
    icon: <Timer className="text-indigo-600 w-8 h-8" />,
    title: "On-Time Delivery",
    description: "We respect your time and always meet our deadlines."
  },
  {
    icon: <CheckCircle className="text-indigo-600 w-8 h-8" />,
    title: "Certified Welders",
    description: "Skilled professionals ensure quality and safety in every job."
  },
  {
    icon: <Hammer className="text-indigo-600 w-8 h-8" />,
    title: "Tailored Solutions",
    description: "Custom work to match your exact needs and specifications."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="about">
    <section className="py-20 bg-white px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Why <span className="text-indigo-600">Choose Us?</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We don’t just build structures, we build trust through consistent performance, high quality, and professional service.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-15">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
     
    </section></section>
  );
};

export default WhyChooseUs;
