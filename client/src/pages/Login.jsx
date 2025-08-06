import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import teaCup from "../assets/tea-cup.jpg";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
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
          <div className="max-w-5xl w-full mx-auto">
            <div className="flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-2xl">
              {/* Left Side - Tea Cup Image */}
              <div className="lg:w-1/2 hidden lg:block">
                <div className="h-full">
                  <img 
                    src={teaCup} 
                    alt="Tea cup"
                    className="w-full h-full object-cover min-h-[500px]"
                  />
                </div>
              </div>
              
              {/* Right Side - Login Form */}
              <div className="lg:w-1/2 p-8 sm:p-12 bg-transparent">
                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-8 text-center uppercase text-white">LOGIN</h2>
                  
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium mb-2 text-white">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        className="w-full px-4 py-3 bg-white bg-opacity-20 border-b border-[#d4a76a] focus:outline-none focus:border-white text-white placeholder-white placeholder-opacity-70 rounded-t-md"
                        placeholder="Enter your username"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium mb-2 text-white">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-3 bg-white bg-opacity-20 border-b border-[#d4a76a] focus:outline-none focus:border-white text-white placeholder-white placeholder-opacity-70 rounded-t-md"
                        placeholder="Enter your password"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <a href="#" className="text-sm font-medium text-[#d4a76a] hover:text-white transition-colors">
                        Forget Password?
                      </a>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#8a4b27] text-white py-3 rounded-md hover:bg-[#6e3a1f] transition-colors uppercase font-bold tracking-wider"
                      >
                        LOGIN
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm mb-4 text-white">Or Sign Up Using</p>
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
                    
                    <p className="mt-6 text-sm text-white">
                      Don't have an account?{' '}
                      <a href="/register" className="font-medium text-[#d4a76a] hover:text-white transition-colors">
                        Sign up here
                      </a>
                    </p>
                  </div>
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

export default Login;