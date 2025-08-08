import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiEdit, FiClock, FiCoffee, FiShoppingBag } from "react-icons/fi";

const Profile = () => {
    // Mock user data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        joinDate: "January 2024",
        favoriteDrink: "Masala Chai",
        orders: 15,
        avatar: "../assets/tea-cup.jpg"
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
            <Header cartItemCount={0} isAuthenticated={true} />
            
            <main className="flex-grow pt-24 pb-12 px-6 sm:px-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-[#4a2600] mb-8">My Profile</h1>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* Profile Header */}
                        <div className="bg-[#4a2600] p-6 text-white">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold">Account Information</h2>
                                <Link 
                                    to="/profile/edit" 
                                    className="flex items-center gap-2 text-amber-200 hover:text-white transition-colors"
                                >
                                    <FiEdit className="h-5 w-5" />
                                    <span>Edit Profile</span>
                                </Link>
                            </div>
                        </div>
                        
                        {/* Profile Content */}
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Left Column */}
                                <div className="md:w-1/3 flex flex-col items-center">
                                    <img 
                                        src={user.avatar} 
                                        alt="Profile" 
                                        className="w-32 h-32 rounded-full object-cover border-4 border-amber-200"
                                    />
                                    <h2 className="text-xl font-semibold mt-4 text-[#4a2600]">{user.name}</h2>
                                    <p className="text-gray-600">{user.email}</p>
                                    
                                    <div className="mt-6 w-full space-y-4">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <FiClock className="h-5 w-5 text-[#8a4b27]" />
                                            <span>Member since {user.joinDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <FiCoffee className="h-5 w-5 text-[#8a4b27]" />
                                            <span>Favorite: {user.favoriteDrink}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <FiShoppingBag className="h-5 w-5 text-[#8a4b27]" />
                                            <span>{user.orders} orders</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Right Column */}
                                <div className="md:w-2/3">
                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-4 text-[#4a2600] border-b pb-2">Order History</h3>
                                        <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                            {user.orders > 0 ? (
                                                <p>Your recent orders will appear here.</p>
                                            ) : (
                                                <div className="text-center py-8">
                                                    <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
                                                    <Link 
                                                        to="/menu" 
                                                        className="inline-block bg-[#8a4b27] hover:bg-[#6e3a1f] text-white px-6 py-2 rounded-full transition-colors"
                                                    >
                                                        Browse Menu
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-[#4a2600] border-b pb-2">Saved Preferences</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                                <h4 className="font-medium text-[#4a2600] mb-2">Delivery Address</h4>
                                                <p className="text-gray-600">123 Coffee Street, Brew City</p>
                                            </div>
                                            <div className="bg-[#f9f9f9] p-4 rounded-lg">
                                                <h4 className="font-medium text-[#4a2600] mb-2">Payment Method</h4>
                                                <p className="text-gray-600">Credit Card ending in 4242</p>
                                            </div>
                                        </div>
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

export default Profile;