import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import Lottie from "lottie-react";
import coffeeAnimation from "../assets/coffee-time.json";
import TargetCursor from "../components/TargetCursor";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black font-sans">
      <TargetCursor />
      <Header />

      <main className="flex-1 relative">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={coffeeBg}
            alt="Coffee background"
            className="w-full h-full object-cover brightness-[0.5] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-[#2c1c12]/80 backdrop-blur-md"></div>
        </div>

        {/* Card */}
        <div className="relative z-10 pt-28 pb-16 px-6 sm:px-10 flex justify-center items-center">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg">
            
            {/* Lottie */}
            <div className="lg:w-1/2 hidden lg:flex items-center justify-center p-8 bg-transparent">
              <Lottie
                animationData={coffeeAnimation}
                loop
                autoplay
                className="w-full max-w-md h-[500px]"
              />
            </div>

            {/* Form */}
            <div className="lg:w-1/2 w-full p-8 sm:p-12">
              <h2 className="text-4xl font-black text-center mb-10 bg-gradient-to-r from-[#ffcf8b] via-[#d4a76a] to-[#8a4b27] text-transparent bg-clip-text uppercase tracking-wider drop-shadow-md">
                Register Now
              </h2>

              <form className="space-y-6">
                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-[#d4a76a] text-sm mb-2 font-semibold tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="Enter your username"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-[#d4a76a] placeholder-white/70 border border-[#d4a76a]/40 focus:border-[#d4a76a] focus:ring-2 focus:ring-[#d4a76a]/40 focus:outline-none transition-all duration-300 cursor-target"
                    required
                    autoFocus
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-[#d4a76a] text-sm mb-2 font-semibold tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-[#d4a76a] placeholder-white/70 border border-[#d4a76a]/40 focus:border-[#d4a76a] focus:ring-2 focus:ring-[#d4a76a]/40 focus:outline-none transition-all duration-300 cursor-target"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobile" className="block text-[#d4a76a] text-sm mb-2 font-semibold tracking-wide">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    autoComplete="tel"
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-[#d4a76a] placeholder-white/70 border border-[#d4a76a]/40 focus:border-[#d4a76a] focus:ring-2 focus:ring-[#d4a76a]/40 focus:outline-none transition-all duration-300 cursor-target"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-[#d4a76a] text-sm mb-2 font-semibold tracking-wide">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    placeholder="Create your password"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-[#d4a76a] placeholder-white/70 border border-[#d4a76a]/40 focus:border-[#d4a76a] focus:ring-2 focus:ring-[#d4a76a]/40 focus:outline-none transition-all duration-300 cursor-target"
                    required
                  />
                </div>

                {/* Repeat Password */}
                <div>
                  <label htmlFor="repeatPassword" className="block text-[#d4a76a] text-sm mb-2 font-semibold tracking-wide">
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    autoComplete="new-password"
                    placeholder="Repeat your password"
                    className="w-full px-4 py-3 rounded-md bg-white/20 text-[#d4a76a] placeholder-white/70 border border-[#d4a76a]/40 focus:border-[#d4a76a] focus:ring-2 focus:ring-[#d4a76a]/40 focus:outline-none transition-all duration-300 cursor-target"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#8a4b27] to-[#d4a76a] text-black py-3 rounded-md hover:scale-105 transition-all font-bold uppercase tracking-wider shadow cursor-target"
                >
                  Register
                </button>
              </form>

              {/* Social */}
              <div className="mt-10 text-center">
                <p className="text-[#d4a76a] text-sm mb-4">Or Sign Up Using</p>
                <div className="flex justify-center gap-4">
                  <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-[#d4a76a] flex items-center justify-center transition-colors shadow-lg shadow-white/10 cursor-target">
                    <FaFacebookF />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-[#d4a76a] flex items-center justify-center transition-colors shadow-lg shadow-white/10 cursor-target">
                    <FaGoogle />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-sky-400 hover:bg-sky-500 text-[#d4a76a] flex items-center justify-center transition-colors shadow-lg shadow-white/10 cursor-target">
                    <FaTwitter />
                  </button>
                </div>

                <p className="mt-6 text-sm text-[#d4a76a]">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-[#d4a76a] hover:text-[#d4a76a] underline transition-colors font-medium cursor-target"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
