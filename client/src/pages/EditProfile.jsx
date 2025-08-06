import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiArrowLeft, FiSave } from 'react-icons/fi';

const EditProfile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john@example.com",
        phone: "(123) 456-7890",
        favoriteDrink: "Masala Chai",
        address: "123 Coffee Street, Brew City"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated data to your backend
        alert('Profile updated successfully!');
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
            <Header cartItemCount={0} isAuthenticated={true} />
            
            <main className="flex-grow pt-24 pb-12 px-6 sm:px-10">
                <div className="max-w-2xl mx-auto">
                    <Link 
                        to="/profile" 
                        className="flex items-center gap-2 text-[#8a4b27] hover:text-[#6e3a1f] mb-6 transition-colors"
                    >
                        <FiArrowLeft className="h-5 w-5" />
                        <span>Back to Profile</span>
                    </Link>
                    
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="bg-[#4a2600] p-6 text-white">
                            <h1 className="text-2xl font-bold">Edit Profile</h1>
                        </div>
                        
                        <div className="p-6">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={user.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a4b27] focus:border-[#8a4b27]"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={user.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a4b27] focus:border-[#8a4b27]"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={user.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a4b27] focus:border-[#8a4b27]"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="favoriteDrink" className="block text-sm font-medium text-gray-700 mb-1">
                                            Favorite Drink
                                        </label>
                                        <select
                                            id="favoriteDrink"
                                            name="favoriteDrink"
                                            value={user.favoriteDrink}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a4b27] focus:border-[#8a4b27]"
                                        >
                                            <option value="Masala Chai">Masala Chai</option>
                                            <option value="Mocha">Mocha</option>
                                            <option value="Espresso">Espresso</option>
                                            <option value="Cappuccino">Cappuccino</option>
                                            <option value="Latte">Latte</option>
                                            <option value="Americano">Americano</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                            Delivery Address
                                        </label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={user.address}
                                            onChange={handleChange}
                                            rows="3"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8a4b27] focus:border-[#8a4b27]"
                                        ></textarea>
                                    </div>
                                    
                                    <div className="flex justify-end gap-4 pt-4">
                                        <Link 
                                            to="/profile" 
                                            className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            type="submit"
                                            className="flex items-center gap-2 bg-[#8a4b27] hover:bg-[#6e3a1f] text-white px-6 py-2 rounded-full transition-colors"
                                        >
                                            <FiSave className="h-5 w-5" />
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default EditProfile;