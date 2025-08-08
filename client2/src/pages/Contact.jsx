import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import contactImage from "../assets/contact-image.jpg";

const Contact = () => {
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
        
        <div className="relative py-12 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center uppercase tracking-wider">
              Contact Us
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side - Image */}
              <div className="lg:w-1/2">
                <div className="h-full rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={contactImage} 
                    alt="Coffee shop staff"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Right side - Contact form */}
              <div className="lg:w-1/2">
                <div className="bg-transparent p-8 rounded-lg h-full">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Your name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full bg-white bg-opacity-20 border-b border-[#8a4b27] py-2 focus:outline-none focus:border-white text-white placeholder-white placeholder-opacity-70" 
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Your email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full bg-white bg-opacity-20 border-b border-[#8a4b27] py-2 focus:outline-none focus:border-white text-white placeholder-white placeholder-opacity-70" 
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">Phone number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          className="w-full bg-white bg-opacity-20 border-b border-[#8a4b27] py-2 focus:outline-none focus:border-white text-white placeholder-white placeholder-opacity-70" 
                          placeholder="Enter phone number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full bg-white bg-opacity-20 border-b border-[#8a4b27] py-2 focus:outline-none focus:border-white text-white placeholder-white placeholder-opacity-70" 
                          placeholder="Enter subject"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Your Message</label>
                      <textarea 
                        id="message" 
                        rows="4" 
                        className="w-full bg-white bg-opacity-20 border-b border-[#8a4b27] py-2 focus:outline-none focus:border-white text-white placeholder-white placeholder-opacity-70" 
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-center">
                      <button 
                        type="submit" 
                        className="bg-[#8a4b27] text-white px-8 py-3 rounded-md hover:bg-[#6e3a1f] transition-colors uppercase font-bold tracking-wider"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-[#4a2600] bg-opacity-90 text-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p>+91 1234567890</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p>contact@coffeehouse.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p>123 Coffee Street, Pune, Maharashtra 411048</p>
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

export default Contact;