import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import coffeeCups from "../assets/coffee-cups.jpg";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={coffeeBg} 
            alt="Coffee background"
            className="w-full h-full object-cover brightness-[0.7] scale-110" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative py-16 px-6 sm:px-10 flex items-center justify-center min-h-[calc(100vh-140px)]">
          <div className="max-w-6xl w-full mx-auto">
            <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl">
              {/* Left Side - Register Form */}
              <div className="lg:w-1/2 p-8 sm:p-12 text-white">
                <h2 className="text-3xl font-bold mb-8 text-center uppercase">REGISTER</h2>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border-b border-[#d4a76a] focus:outline-none focus:border-white placeholder-white placeholder-opacity-70 rounded-t-md"
                      placeholder="Enter your username"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border-b border-[#d4a76a] focus:outline-none focus:border-white placeholder-white placeholder-opacity-70 rounded-t-md"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border-b border-[#d4a76a] focus:outline-none focus:border-white placeholder-white placeholder-opacity-70 rounded-t-md"
                      placeholder="Create your password"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="repeatPassword" className="block text-sm font-medium mb-2">
                      Repeat Password
                    </label>
                    <input
                      type="password"
                      id="repeatPassword"
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border-b border-[#d4a76a] focus:outline-none focus:border-white placeholder-white placeholder-opacity-70 rounded-t-md"
                      placeholder="Repeat your password"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-[#8a4b27] text-white py-3 rounded-md hover:bg-[#6e3a1f] transition-colors uppercase font-bold tracking-wider"
                    >
                      REGISTER
                    </button>
                  </div>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-sm mb-4">Or Sign Up Using</p>
                  <div className="flex justify-center space-x-4">
                    {/* Facebook Button */}
                    <button className="w-10 h-10 rounded-full border border-blue-500 bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                      <FaFacebookF className="text-lg" />
                    </button>
                    
                    {/* Google Button */}
                    <button className="w-10 h-10 rounded-full border border-red-500 bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                      <FaGoogle className="text-lg" />
                    </button>
                    
                    {/* Twitter Button */}
                    <button className="w-10 h-10 rounded-full border border-blue-400 bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <FaTwitter className="text-lg" />
                    </button>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-[#d4a76a]">
                    <h3 className="text-lg font-medium text-[#d4a76a]">Coffee Time!</h3>
                    <p className="text-sm mt-2">
                      Join our coffee community today
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Coffee Cups Image */}
              <div className="lg:w-1/2 hidden lg:block">
                <div className="h-full">
                  <img 
                    src={coffeeCups} 
                    alt="Two cups of coffee"
                    className="w-full h-full object-cover min-h-[500px]"
                  />
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

export default Register;