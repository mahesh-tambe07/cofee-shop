import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import coffeeBg from "../assets/coffee-bg.jpg";
import dineInImage from "../assets/dine-in.jpg";
import takeawayImage from "../assets/takeaway.jpg";
import onlineOrderingImage from "../assets/online-ordering.jpg";
import customCoffeeImage from "../assets/custom-coffee.jpg";
import bakeryImage from "../assets/bakery.jpg";
import wifiImage from "../assets/wifi.jpg";
import loyaltyImage from "../assets/loyalty.jpg";
import liveMusicImage from "../assets/live-music.jpg";
import seasonalImage from "../assets/seasonal.jpg";
import giftCardsImage from "../assets/gift-cards.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [bookedServices, setBookedServices] = useState([]);

  // Separate services into bookable and non-bookable
  const bookableServices = [
    { 
      id: 1, 
      title: "Dine-In Service", 
      emoji: "☕",
      description: "Enjoy our premium coffee in a cozy atmosphere",
      details: {
        image: dineInImage,
        fullDescription: "Our dine-in service offers a comfortable environment where you can enjoy handcrafted coffee beverages made by our expert baristas. Relax in our thoughtfully designed space with free Wi-Fi and power outlets at every table.",
        features: [
          "Comfortable seating arrangements",
          "Free Wi-Fi access",
          "Power outlets at every table",
          "Quiet zones available",
          "Newspapers and magazines"
        ],
        hours: "7:00 AM - 9:00 PM Daily"
      }
    },
    { 
      id: 3, 
      title: "Online Ordering", 
      emoji: "📱",
      description: "Order ahead and skip the line",
      details: {
        image: onlineOrderingImage,
        fullDescription: "Skip the wait with our convenient online ordering system. Place your order through our app or website and pick it up at your convenience with minimal waiting time.",
        features: [
          "Mobile app available",
          "Web-based ordering",
          "Order tracking",
          "Customization options",
          "Payment integration"
        ],
        hours: "Available 24/7 for pre-orders"
      }
    },
    { 
      id: 8, 
      title: "Live Music", 
      emoji: "🎵",
      description: "Weekly performances by local artists",
      details: {
        image: liveMusicImage,
        fullDescription: "Enjoy our weekly live music nights featuring talented local artists in a relaxed, intimate setting perfect for unwinding with your favorite beverage.",
        features: [
          "Every Friday & Saturday night",
          "Local artists showcase",
          "Acoustic performances",
          "Request nights",
          "Open mic opportunities"
        ],
        hours: "7:00 PM - 9:00 PM (Fri & Sat)"
      }
    },
    { 
      id: 9, 
      title: "Seasonal Specials", 
      emoji: "🍂",
      description: "Limited-time seasonal offerings",
      details: {
        image: seasonalImage,
        fullDescription: "Experience our rotating selection of seasonal drinks and menu items that celebrate the flavors of each time of year.",
        features: [
          "Monthly changing menu",
          "Holiday specials",
          "Local seasonal ingredients",
          "Limited edition merchandise",
          "Themed events"
        ],
        hours: "Available during all business hours"
      }
    }
  ];

  const nonBookableServices = [
    { 
      id: 2, 
      title: "Takeaway/Parcel", 
      emoji: "🛍️",
      description: "Get your favorite coffee on the go",
      details: {
        image: takeawayImage,
        fullDescription: "For customers on the move, our takeaway service ensures you don't have to compromise on quality. We use premium packaging to maintain temperature and flavor integrity of your beverages.",
        features: [
          "Express service line",
          "Eco-friendly packaging",
          "Temperature-controlled cups",
          "Pre-order via app",
          "Curbside pickup available"
        ],
        hours: "6:00 AM - 10:00 PM Daily"
      }
    },
    { 
      id: 4, 
      title: "Custom Coffee", 
      emoji: "✨",
      description: "Personalized blends just for you",
      details: {
        image: customCoffeeImage,
        fullDescription: "Create your perfect cup with our custom coffee service. Choose from our selection of premium beans, roasts, and flavor profiles to craft a blend that's uniquely yours.",
        features: [
          "Bean selection guidance",
          "Roast level customization",
          "Flavor profile creation",
          "Personal labeling",
          "Bulk ordering available"
        ],
        hours: "9:00 AM - 6:00 PM (Consultation required)"
      }
    },
    { 
      id: 5, 
      title: "Bakery Items", 
      emoji: "🥐",
      description: "Fresh pastries daily",
      details: {
        image: bakeryImage,
        fullDescription: "Complement your coffee with our freshly baked pastries and desserts, made in-house daily using traditional recipes and premium ingredients.",
        features: [
          "Freshly baked daily",
          "Gluten-free options",
          "Seasonal specials",
          "Custom cakes available",
          "Local ingredient sourcing"
        ],
        hours: "Available during all business hours"
      }
    },
    { 
      id: 6, 
      title: "Free Wi-Fi", 
      emoji: "📶",
      description: "High-speed internet for our guests",
      details: {
        image: wifiImage,
        fullDescription: "Stay connected with our high-speed Wi-Fi service, perfect for remote work, studying, or casual browsing while enjoying your coffee.",
        features: [
          "High-speed connection",
          "Unlimited usage",
          "Secure network",
          "No time limits",
          "Dedicated work zones"
        ],
        hours: "Available during all business hours"
      }
    },
    { 
      id: 7, 
      title: "Loyalty Program", 
      emoji: "🎯",
      description: "Earn rewards with every purchase",
      details: {
        image: loyaltyImage,
        fullDescription: "Join our loyalty program and earn points with every purchase that can be redeemed for free drinks, discounts, and exclusive offers.",
        features: [
          "1 point per dollar spent",
          "Exclusive member offers",
          "Birthday rewards",
          "Double point days",
          "Mobile app integration"
        ],
        hours: "Available 24/7 through our app"
      }
    },
    { 
      id: 10, 
      title: "Gift Cards", 
      emoji: "🎁",
      description: "Perfect present for coffee lovers",
      details: {
        image: giftCardsImage,
        fullDescription: "Our gift cards make the perfect present for any coffee enthusiast, available in various denominations and with customizable designs.",
        features: [
          "Physical & digital options",
          "Customizable designs",
          "No expiration date",
          "Balance checking",
          "Corporate gifting available"
        ],
        hours: "Available for purchase anytime"
      }
    }
  ];

  const closeDetails = () => {
    setSelectedService(null);
  };

  const handleBookService = (serviceId) => {
    if (!bookedServices.includes(serviceId)) {
      setBookedServices([...bookedServices, serviceId]);
    }
    closeDetails();
  };

  const isServiceBooked = (serviceId) => {
    return bookedServices.includes(serviceId);
  };

  const renderServiceCard = (service, isBookable) => {
    return (
      <div 
        key={service.id} 
        className={`group bg-white bg-opacity-90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center cursor-pointer ${
          isServiceBooked(service.id) ? "ring-2 ring-green-500" : ""
        }`}
        onClick={() => setSelectedService(service)}
      >
        <div className="bg-amber-100 text-amber-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 text-3xl">
          {service.emoji}
        </div>
        <h2 className="text-xl font-bold text-[#4a2600] mb-2">
          {service.title}
        </h2>
        <p className="text-gray-600 text-sm">
          {service.description}
        </p>
        <div className="mt-4 flex items-center">
          <span className={`text-sm font-bold ${
            isServiceBooked(service.id) 
              ? "text-green-600" 
              : "text-amber-600 group-hover:text-amber-800"
          } transition-colors duration-300`}>
            {isServiceBooked(service.id) ? "✓ Booked" : "Learn more →"}
          </span>
        </div>
      </div>
    );
  };

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
          <div className="max-w-7xl mx-auto">
            {/* Service Details Overlay */}
            {selectedService && (
              <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="relative">
                    <button 
                      onClick={closeDetails}
                      className="absolute top-4 right-4 bg-[#8a4b27] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#6e3a1f] transition-colors"
                    >
                      &times;
                    </button>
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      <div>
                        <div className="bg-amber-100 text-amber-800 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-4xl mx-auto">
                          {selectedService.emoji}
                        </div>
                        <h2 className="text-3xl font-bold text-[#4a2600] mb-4 text-center">
                          {selectedService.title}
                        </h2>
                        <p className="text-gray-600 mb-6">
                          {selectedService.details.fullDescription}
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg mb-6">
                          <h3 className="font-bold text-[#8a4b27] mb-2">Service Hours:</h3>
                          <p>{selectedService.details.hours}</p>
                        </div>
                        {bookableServices.some(s => s.id === selectedService.id) ? (
                          <button 
                            onClick={() => handleBookService(selectedService.id)}
                            className={`w-full py-3 rounded-lg uppercase font-medium tracking-wider transition-colors ${
                              isServiceBooked(selectedService.id)
                                ? "bg-green-600 text-white hover:bg-green-700"
                                : "bg-[#8a4b27] text-white hover:bg-[#6e3a1f]"
                            }`}
                          >
                            {isServiceBooked(selectedService.id) ? "✓ Booked" : "Book This Service"}
                          </button>
                        ) : (
                          <div className="w-full py-3 rounded-lg uppercase font-medium tracking-wider bg-gray-200 text-gray-600 text-center">
                            Available to All Customers
                          </div>
                        )}
                      </div>
                      <div>
                        <img 
                          src={selectedService.details.image}
                          alt={selectedService.title}
                          className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h3 className="font-bold text-xl text-[#4a2600] mb-3">Features:</h3>
                        <ul className="space-y-2">
                          {selectedService.details.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-amber-600 mr-2">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Services Page */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 uppercase tracking-wider">
                Our Services
              </h1>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-white max-w-2xl mx-auto text-lg opacity-90">
                Discover the full range of services we offer to enhance your coffee experience
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Bookable Services Column */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-amber-500">
                  Bookable Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {bookableServices.map(service => renderServiceCard(service, true))}
                </div>
              </div>
              
              {/* Non-Bookable Services Column */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-amber-500">
                  Additional Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {nonBookableServices.map(service => renderServiceCard(service, false))}
                </div>
              </div>
            </div>

            <div className="mt-20 bg-white bg-opacity-90 p-10 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h2 className="text-3xl font-bold text-[#8a4b27] mb-4">Premium Coffee Experience</h2>
                  <p className="text-gray-600 mb-4">
                    We're dedicated to providing not just coffee, but a complete experience. 
                    From the moment you walk in, you'll notice the difference in our service, 
                    quality, and atmosphere.
                  </p>
                  <button className="bg-[#8a4b27] text-white px-6 py-3 rounded-lg hover:bg-[#6e3a1f] transition-colors uppercase font-medium tracking-wider">
                    Book a Table
                  </button>
                </div>
                <div className="md:w-1/2 bg-amber-50 p-6 rounded-lg border border-amber-100">
                  <h3 className="text-xl font-bold text-[#4a2600] mb-3">Service Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between border-b border-amber-100 pb-2">
                      <span className="font-medium">Weekdays</span>
                      <span>7:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-amber-100 pb-2">
                      <span className="font-medium">Saturday</span>
                      <span>8:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
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

export default Services;