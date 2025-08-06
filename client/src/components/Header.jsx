import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/menu", label: "MENU" },
  { to: "/services", label: "SERVICES" },
  { to: "/contact", label: "CONTACT" },
];

const Header = ({ cartItemCount, onCartClick, isAuthenticated = false }) => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      className="fixed top-0 left-0 w-full bg-[#4a2600] text-white z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="group">
            <motion.img
              src={logo}
              alt="Coffee House Logo"
              className="w-30 sm:w-34 h-2 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="flex gap-6 sm:gap-8 text-sm sm:text-base font-medium"
          >
            {navLinks.map((link, idx) => (
              <motion.li
                key={link.to}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + idx * 0.07, duration: 0.4 }}
              >
                <Link
                  to={link.to}
                  className="hover:text-amber-200 transition-colors duration-200 px-2 py-1 rounded relative"
                >
                  <span className="relative z-10">{link.label}</span>
                  <motion.div
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Cart and User Buttons */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center gap-4"
        >
          {/* Cart Icon */}
          <motion.button
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onCartClick}
            className="relative p-2 rounded-full hover:bg-[#6e3a1f] transition-colors duration-300"
          >
            <FiShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {cartItemCount}
              </motion.span>
            )}
          </motion.button>

          {/* User Profile Icon - Only shown when authenticated */}
          {isAuthenticated && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <Link
                to="/profile"
                className="p-2 rounded-full hover:bg-[#6e3a1f] transition-colors duration-300"
                title="My Profile"
              >
                <FiUser className="h-5 w-5" />
              </Link>
            </motion.div>
          )}

          {/* Login/Logout Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            {isAuthenticated ? (
              <Link
                to="/logout"
                className="bg-[#8a4b27] px-4 sm:px-6 py-2 rounded-full shadow-md font-medium hover:bg-[#6e3a1f] transition-colors duration-300 text-sm sm:text-base flex items-center gap-2"
              >
                <span>LOGOUT</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </motion.svg>
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-[#8a4b27] px-4 sm:px-6 py-2 rounded-full shadow-md font-medium hover:bg-[#6e3a1f] transition-colors duration-300 text-sm sm:text-base flex items-center gap-2"
              >
                <span>LOGIN</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
          className="md:hidden text-2xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
        >
          ☰
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;