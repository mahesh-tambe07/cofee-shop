import React from "react";
import Header from "../components/Header";
import TargetCursor from "../components/TargetCursor";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import aboutAnimation from "../assets/about.json";

// ☕ Floating Coffee Bean Component
const CoffeeBean = ({ style, size }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: 0, scale: 0.8 }}
    animate={{
      opacity: [0, 0.4, 0.7, 0.4, 0],
      y: [-30, -60, -90],
      rotate: [0, 180, 360],
      scale: [0.8, 1.1, 0.8],
    }}
    transition={{
      repeat: Infinity,
      duration: 12 + Math.random() * 6,
      delay: Math.random() * 4,
      ease: "easeInOut",
    }}
    style={style}
    className="absolute z-10 pointer-events-none"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#d4a76a"
      className={`opacity-70 drop-shadow-lg ${size}`}
    >
      <path d="M12 2C7 2 2 7 2 12s5 10 10 10 10-5 10-10S17 2 12 2zm1 17.93c-1.78.46-3.63-.15-4.95-1.47-1.33-1.33-1.94-3.17-1.48-4.96.1-.38.64-.42.83-.06.65 1.22 1.77 2.33 2.99 2.99.36.19.32.73-.07.83-.11.03-.21.06-.32.1z" />
    </svg>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-gradient-to-br from-[#1c1a17] via-[#0f0e0e] to-[#1c0f0a] relative overflow-hidden">
      <TargetCursor />
      <Header />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1e1713] to-black opacity-80 backdrop-blur-[3px]" />
      </div>

      {/* ☕ Floating Coffee Beans */}
      {[...Array(25)].map((_, i) => (
        <CoffeeBean
          key={i}
          size={Math.random() > 0.5 ? "w-3 h-3" : "w-5 h-5"}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            filter: `blur(${Math.random() * 1.5}px)`,
          }}
        />
      ))}

      {/* Main Content */}
      <main className="relative z-20 flex-1 pt-28 pb-20 px-6 sm:px-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 
                     rounded-[2.5rem] border border-[#d4a76a]/30 
                     bg-white/5 backdrop-blur-3xl shadow-[0_0_140px_rgba(255,255,255,0.06)]
                     p-8 sm:p-12 hover:shadow-[0_0_200px_rgba(255,215,150,0.15)]
                     transition-all duration-700 group relative overflow-hidden"
        >
          {/* Animated Glow Border */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-transparent 
                          animate-[glow_4s_ease-in-out_infinite] 
                          pointer-events-none" />

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:w-1/2 text-white space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-wider 
                           text-center lg:text-left bg-gradient-to-r from-[#ffdcaa] via-[#d4a76a] to-[#7a4a23] 
                           text-transparent bg-clip-text drop-shadow-md cursor-target 
                           hover:scale-105 transition-transform duration-300 
                           animate-[shimmer_3s_linear_infinite]">
              About Us
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a76a] to-transparent rounded-full mx-auto lg:mx-0 animate-pulse" />

            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-lg leading-relaxed font-medium text-white/90 cursor-target"
            >
              Welcome to <span className="text-[#d4a76a] font-semibold">COFFEE HOUSE</span> — your cozy corner for handcrafted coffee, comfy seating, and warm conversations.
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-lg leading-relaxed text-white/80 cursor-target"
            >
              Our beans are ethically sourced, roasted fresh, and brewed with love. Come in for a morning boost or a peaceful evening sip—your perfect cup awaits.
            </motion.p>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:w-1/2 flex justify-center items-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.03, 1],
                rotate: [0, 0.5, -0.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 20px rgba(212,167,106,0.5))" }}
              className="w-full max-w-md h-[400px] sm:h-[500px] drop-shadow-[0_0_60px_rgba(212,167,106,0.25)]"
            >
              <Lottie animationData={aboutAnimation} loop autoplay className="w-full h-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      {/* Glow & Shimmer Animations */}
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(212, 167, 106, 0.1); }
          50% { box-shadow: 0 0 60px rgba(212, 167, 106, 0.25); }
        }
        @keyframes shimmer {
          0% { background-position: -500px 0; }
          100% { background-position: 500px 0; }
        }
        .animate-[shimmer_3s_linear_infinite] {
          background-size: 1000px 100%;
        }
      `}</style>
    </div>
  );
};

export default About;
