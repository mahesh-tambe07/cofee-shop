import React from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import aboutPeople from "../assets/about-people.jpg"; // You'll need to add this image

const About = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 relative">
        {/* Background with overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={coffeeBg} 
            alt="Coffee background"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Content container */}
        <div className="relative min-h-[calc(100vh-80px)] flex items-center p-6 sm:p-10">
          <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10">
            {/* Left Side - Content */}
            <div className="lg:w-1/2 text-[#2a1e17]">
              <div className="bg-white bg-opacity-90 p-8 sm:p-10 rounded-xl shadow-lg">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center uppercase text-[#5c3d2e]">
                  ABOUT US
                </h1>
                
                <div className="text-lg leading-relaxed space-y-6 text-[#4a3529]">
                  <p className="font-medium">
                    Welcome to COFFEE HOUSE – your cozy corner for handcrafted coffee, 
                    comfy seating, and warm conversations.
                  </p>
                  <p>
                    We serve ethically sourced, fresh-roasted beans brewed with love. 
                    Whether you need a morning boost or a peaceful evening sip, 
                    our café is your perfect stop.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - People Image */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl transform rotate-1">
                <img 
                  src={aboutPeople} 
                  alt="Two people enjoying coffee"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default About;