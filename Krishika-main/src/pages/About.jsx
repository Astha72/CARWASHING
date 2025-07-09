import React from "react";
import about1 from "../assets/about1.png";

const About = () => {
  return (
    <section id="about" className="w-full bg-white">
      {/* Introduction Section */}
      <div className="w-full py-24 px-6 md:px-20">
        <div className="bg-gray-100 border-white rounded-lg p-6 md:p-10 shadow-md">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-red-600 font-bold text-sm mb-2 tracking-wide uppercase">
                Our Value
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Expert Aluminum & Glass Fabrication Services
              </h2>
              <p className="text-gray-700 mb-8 max-w-sm leading-relaxed">
                We specialize in precision-engineered aluminum works including ACP paneling,
                sliding windows/doors, toughened glass partitions, and steel railings using
                top-grade Jindal and Hindalco materials.
              </p>
            </div>

            <div className="md:col-span-2 bg-[#0a0a4a] text-white rounded-lg overflow-hidden grid md:grid-cols-2">
              <div className="w-full flex justify-center items-center">
                <div className="p-6 md:p-8 w-full">
                  <div className="grid gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-sm mb-4 leading-relaxed">
                        To be the most trusted name in aluminum and glass solutions, offering
                        innovative designs with durable materials for residential and commercial spaces.
                      </p>
                      <button className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
                        LEARN MORE
                      </button>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                      <p className="text-sm mb-4 leading-relaxed">
                        Our mission is to deliver high-quality fabrication and installation services—
                        from aluminum windows and ACP panels to glass partitions—ensuring customer satisfaction every step of the way.
                      </p>
                      <button className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative w-full bg-cover bg-center text-white py-24 px-6 md:px-20"
        style={{ backgroundImage: `url(${about1})` }}
      >
        <div className="absolute inset-0 bg-[#0a0a4a] opacity-75 z-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Schedule your aluminum & glass service today <br /> and experience quality craftsmanship.
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            From sliding doors, office partitions, ACP cladding to toughened glass installations —
            we deliver durable, modern, and aesthetic fabrication solutions using premium materials
            like Jindal and Hindalco.
          </p>
         <button
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-yellow-400 text-black font-bold px-6 py-3 rounded hover:bg-yellow-500 transition duration-300"
>
  BOOK A FREE SITE VISIT
</button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-yellow-400 text-black py-14 px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold">10K+</h3>
          <p className="font-medium mt-2">Happy Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">25K+</h3>
          <p className="font-medium mt-2">Projects Done</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">521+</h3>
          <p className="font-medium mt-2">Professional Experts</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">4.6</h3>
          <p className="font-medium mt-2">Client Rating</p>
        </div>
      </div>
    </section>
  );
};

export default About;
