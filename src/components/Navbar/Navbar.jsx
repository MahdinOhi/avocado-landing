"use client";

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SignUpButton from './SignUpButton';

// Main Navbar Component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full">
            <nav className="bg-cream-50 bg-opacity-90 shadow-md py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">
                <Logo />

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black focus:outline-none"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    <NavLinks />
                </div>

                {/* Sign up button */}
                <div className="hidden md:block">
                    <SignUpButton />
                </div>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg py-4">
                    <div className="flex flex-col space-y-4 px-6">
                        {['About Us', 'Blogs', 'Pricing', 'FAQs'].map((link) => (
                            <Link
                                key={link}
                                href={`/${link.toLowerCase().replace(' ', '-')}`}
                                className="text-black hover:text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <SignUpButton />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;