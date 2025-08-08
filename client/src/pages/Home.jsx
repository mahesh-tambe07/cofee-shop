import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import About from "./About";
import Menu from "./Menu";
import ModelViewer from "../components/ModelViewer";
import TextType from '../components/TextType';

const Home = () => {
  return (
    <div className="min-h-screen font-sans flex flex-col bg-black text-white relative">
      <Header />

      <main className="flex-1 relative">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={coffeeBg}
            alt="Coffee background"
            className="w-full h-full object-cover brightness-[0.6] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-[#2c1c12]/80 backdrop-blur-md"></div>
        </div>

        {/* Hero Section */}
        <section className="relative h-screen flex pt-32 lg:pt-0 z-10">
          {/* Left side - Text content (50% width) */}
          <div className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 lg:px-16 xl:px-24 py-12">
            <div className="max-w-md mx-auto space-y-10">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
                <TextType
                  text={["COFFEE"]}
                  typingSpeed={100}
                  pauseDuration={1000}
                  showCursor={false}
                  loop={true}
                />
                <br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "2px white" }}
                >
                  <TextType
                    text={["HOUSE"]}
                    typingSpeed={100}
                    pauseDuration={1000}
                    showCursor={false}
                    loop={true}
                  />
                </span>
              </h1>

              {/* 3D Model below title (mobile only) */}
              <div className="w-full mt-6 block lg:hidden">
                <ModelViewer url="/models/espresso-cup.glb" height="300px" />
              </div>

              {/* Side-by-side section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Discount Section */}
                <div className="space-y-2 uppercase">
                  <p className="text-sm sm:text-base text-amber-300">Special Offer Today Only!!!</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-amber-100">
                    DISCOUNT <br />
                    <span className="text-4xl sm:text-5xl text-amber-400">50%</span>
                  </h2>
                </div>

                {/* Contact Section */}
                <div className="space-y-2 leading-relaxed">
                  <h3 className="font-bold text-lg sm:text-xl">TALK TO US</h3>
                  <p className="text-sm sm:text-base">
                    (04) 298 3985 2092 <br />
                    +76 209 1092 4095 <br />
                    <a
                      href="mailto:info@mollysrestaurant.com"
                      className="underline hover:text-amber-300 transition-colors"
                    >
                      info@mollysrestaurant.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - 3D Espresso Cup Model */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
            <div className="w-full max-w-[500px]">
              <ModelViewer url="/models/espresso-cup.glb" height="400px" />
            </div>
          </div>
        </section>

        {/* Page Sections */}
        <div className="relative z-10 space-y-24 pt-24 pb-32 px-4 sm:px-6 lg:px-12 xl:px-24">
          <About />
          <Menu />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;