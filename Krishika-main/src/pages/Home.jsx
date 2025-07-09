import React from "react";
import bgHero from "../assets/aluminium-doors-windows.jpg";
import home1 from "../assets/home1.png";
import {
  FaTools,
  FaWindowRestore,
  FaBuilding,
  FaGripLines,
  FaWrench,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import stairImage1 from "../assets/stairImage1.webp";
import stairImage2 from "../assets/stairImage2.jpg";
import stairImage3 from "../assets/stairImage3.png";

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60 z-10"></div>

        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center h-full px-6 max-w-7xl mx-auto text-white">
          {/* LEFT */}
          <div className="mt-24 md:mt-0 max-w-xl text-center md:text-left">
            <p className="text-yellow-400 text-lg font-bold">
              WELCOME TO KRISHIKA ALUMINIUM
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mt-2">
              Join for Quality Services.
            </h1>
            <button
              className="mt-6 bg-yellow-400 text-black px-6 py-3 font-semibold rounded shadow hover:bg-yellow-300 transition duration-200"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              DISCOVER MORE
            </button>
          </div>

          {/* RIGHT */}
          <div className="mt-10 md:mt-0">
            <img
              src={home1}
              alt="Home Visual"
              className="w-[90%] md:w-[500px] lg:w-[600px] h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Aluminum Fabrication & Glazing Solutions
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-700">
              Specializing in premium aluminum fabrication, sliding doors and
              windows, ACP cladding, toughened glass partitions, and office
              cabins – powered by top brands like Jindal and Hindalco.
            </p>
            <ul className="space-y-4 text-gray-800">
              {[
                {
                  icon: <FaWindowRestore className="text-indigo-600 mt-1" />,
                  title: "Sliding Doors & Windows",
                  desc: "Expert installation for homes and offices.",
                },
                {
                  icon: <FaBuilding className="text-indigo-600 mt-1" />,
                  title: "Office Cabins & Room Partitions",
                  desc: "Custom aluminum partitions with modern designs.",
                },
                {
                  icon: <FaGripLines className="text-indigo-600 mt-1" />,
                  title: "ACP & Glazing Work",
                  desc: "Stylish ACP cladding & glass work.",
                },
                {
                  icon: <FaTools className="text-indigo-600 mt-1" />,
                  title: "Toughened Glass Solutions",
                  desc: "Glass cabins & partitions with durable finish.",
                },
                {
                  icon: <FaWrench className="text-indigo-600 mt-1" />,
                  title: "Steel Railings & Fabrication",
                  desc: "Premium steel & aluminum railings for all properties.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full"
            >
              {[stairImage1, stairImage2, stairImage3].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="rounded-xl shadow-lg w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 text-sm font-bold rounded shadow">
              20+<br />
              Years of Experience
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
