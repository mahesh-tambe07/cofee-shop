import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";
import TargetCursor from "../components/TargetCursor";

const Contact = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-black relative">
      <TargetCursor />
      <Header />

      <main className="flex-1 relative">
        {/* Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={coffeeBg}
            alt="Coffee background"
            className="w-full h-full object-cover brightness-[0.5] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 pt-32 pb-20 px-4 sm:px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#d4a76a] text-center uppercase tracking-wider mb-16 drop-shadow-lg">
              Let's Talk Coffee
            </h1>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Animation */}
              <div className="lg:w-1/2 flex justify-center">
                <div className="w-full max-w-lg">
                  <Lottie animationData={contactAnimation} loop autoplay />
                </div>
              </div>

              {/* Form */}
              <div className="lg:w-1/2 w-full bg-white/10 border border-white/10 backdrop-blur-md shadow-2xl rounded-2xl p-10">
                <form className="space-y-8">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput label="Name" id="name" type="text" />
                    <FloatingInput label="Email" id="email" type="email" />
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput label="Phone" id="phone" type="tel" />
                    <FloatingInput label="Subject" id="subject" type="text" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      rows="5"
                      required
                      className="w-full bg-white/10 border border-[#d4a76a] text-white px-4 py-3 pt-6 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#d4a76a] transition-all cursor-target"
                      placeholder="Your message"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-2 text-sm text-[#d4a76a] pointer-events-none transition-all"
                    >
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-10 py-3 bg-gradient-to-r from-[#8a4b27] to-[#d4a76a] text-black font-bold uppercase rounded-md tracking-wider hover:scale-105 transition-transform shadow-md cursor-target"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-20 bg-gradient-to-r from-[#2e1800] via-[#3b1f00] to-[#2e1800] bg-opacity-90 text-white p-8 sm:p-12 rounded-xl shadow-inner">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                  <h3 className="text-lg font-bold text-[#d4a76a] mb-2">Phone</h3>
                  <p className="text-white/90">+91 1234567890</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#d4a76a] mb-2">Email</h3>
                  <p className="text-white/90">contact@coffeehouse.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#d4a76a] mb-2">Address</h3>
                  <p className="text-white/90">
                    123 Coffee Street, Pune, Maharashtra 411048
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// ✅ Floating Input Field Component
const FloatingInput = ({ label, id, type }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        required
        placeholder={label}
        className="w-full bg-white/10 border border-[#d4a76a] text-white px-4 py-3 pt-6 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#d4a76a] transition-all cursor-target"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-2 text-sm text-[#d4a76a] pointer-events-none transition-all"
      >
        {label}
      </label>
    </div>
  );
};

export default Contact;
  