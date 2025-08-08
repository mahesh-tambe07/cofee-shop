import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4a2600] text-white py-8 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-4">COFFEE HOUSE</h3>
          <p className="text-sm mb-4">The best coffee experience in town since 2010.</p>
          <div className="flex space-x-4">
            <Link to="/profile" className="text-amber-200 hover:text-white transition-colors duration-200">
              My Profile
            </Link>
            <Link to="/menu" className="text-amber-200 hover:text-white transition-colors duration-200">
              Order Online
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">OPENING HOURS</h3>
          <p className="text-sm">Monday - Friday: 7am - 9pm</p>
          <p className="text-sm">Saturday - Sunday: 8am - 10pm</p>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT</h3>
          <p className="text-sm">123 Coffee Street</p>
          <p className="text-sm">Brew City, BC 12345</p>
          <p className="text-sm">info@coffeehouse.com</p>
          <p className="text-sm">(123) 456-7890</p>
        </div>
      </div>
      
      <div className="border-t border-[#6e3a1f] mt-8 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Coffee House. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link to="/privacy" className="hover:text-amber-200 transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-amber-200 transition-colors duration-200">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;