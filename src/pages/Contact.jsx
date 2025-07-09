import React, { useRef } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6sbjhds',      // Replace with your EmailJS service ID
        'template_cmgp9a9',     // Replace with your EmailJS template ID
        form.current,
        'AuuiQAXPgWMXLUGCh'     // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Booking request sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send booking. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Book a <span className="text-indigo-600">Professional Car Wash</span> Today
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            We offer exterior and interior car cleaning, polishing, detailing, and more – all with premium products and expert care. Your car deserves the best!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Call for Booking</p>
                <p>+91 86199 65763</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p>bookings@carshinepro.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Operating Hours</p>
                <p>Mon – Sun: 8:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Our Location</p>
                <p>
                  22-B, CarShine Complex, MI Road, Jaipur, Rajasthan 302001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Book Your Wash</h3>
          <p className="text-gray-600 text-sm mb-6">
            Fill out the form below to request your car wash appointment.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <input
              name="vehicle"
              type="text"
              placeholder="Vehicle Model (e.g., Swift, Honda City)"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <select
              name="service_type"
              required
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select Service Type</option>
              <option value="Exterior Wash">Exterior Wash</option>
              <option value="Interior Cleaning">Interior Cleaning</option>
              <option value="Full Detailing">Full Detailing</option>
              <option value="Polishing & Waxing">Polishing & Waxing</option>
            </select>

            <input
              name="preferred_time"
              type="text"
              placeholder="Preferred Time (e.g., 10:30 AM)"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Additional Instructions (optional)"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded font-semibold text-sm tracking-wide hover:bg-indigo-500 transform hover:scale-105 transition duration-300"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
