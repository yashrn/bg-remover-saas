import React, { useState } from 'react';
import { assets } from '../assets/assets.js'; // Adjust the path as necessary
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";


const Menubar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {openSignIn, openSignUp} = useClerk();

    const openRegister = () => {
        openSignUp({});
    }

    const openLogin = () => {
        openSignIn({});
    }

    return (
        <nav className="bg-white px-8 py-4 flex justify-between items-center">
            {/*left side = logo + text */}
            <Link className="flex items-center space-x-2" to="/">
                <img src={assets.logo} alt="logo" className="h-8 w-8 object-contain cursor-pointer" />
                <span className="text-2xl font-semibold text-indigo-700 cursor-pointer">
                    remove.<span className="text-gray-400 cursor-pointer">bg</span>
                </span>
            </Link>
            {/* Right side = action buttons*/}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <button className="text-gray-700 hover:text-blue-500 font-medium" onClick={openLogin}>
                    Login
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full transition-all" onClick={openRegister}>
                    Sign up
                </button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            {/* Hamburger menu for mobile view */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
             {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-4 p-4 w-40">
                <SignedOut>
                    <button className="text-gray-700 hover:text-blue-500 font-medium cursor-pointer px-4 py-2" onClick={openLogin}>
                        Login
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-full cursor-pointer transition-all" onClick={openRegister}>
                        Sign up
                    </button>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </div>
            )}
        </nav>
    )
}

export default Menubar;
// This component is a placeholder for the menubar..


