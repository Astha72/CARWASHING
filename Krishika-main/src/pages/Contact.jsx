import React, { useRef } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6sbjhds',      // 🔁 Replace with your actual EmailJS service ID
        'template_cmgp9a9',     // 🔁 Replace with your actual EmailJS template ID
        form.current,
        'AuuiQAXPgWMXLUGCh'       // 🔁 Replace with your actual EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Let’s <span className="text-indigo-600">Build Something Strong</span> Together
          </h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            From aluminum doors and windows to glass glazing, steel railings, and office cabins — we're
            here to bring your ideas to life with quality craftsmanship and timely delivery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Call for Inquiry</p>
                <p>086199 65763</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Send us an Email</p>
                <p>info@krishikafab.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Opening Hours</p>
                <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Office Location</p>
                <p>
                  A-13, Pathik Bhawan Colony, Mahaveer Colony, Kartarpura, Gopal Pura Mode,
                  Jaipur, Rajasthan 302006
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Get in Touch</h3>
          <p className="text-gray-600 text-sm mb-6">
            Fill out the form below and our team will get back to you soon.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="first_name"
                type="text"
                required
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                name="last_name"
                type="text"
                required
                placeholder="Last Name"
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

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message..."
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded font-semibold text-sm tracking-wide hover:bg-indigo-500 transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
