import React from 'react';

export const Navbar = () => {
    return (
        <nav className="bg-gray-200 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <span className="text-lg font-bold">링글</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}