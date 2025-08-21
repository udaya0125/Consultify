import React, { useState, useEffect } from "react";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full  z-50 ">
            <div
                className={` w-full px-4 lg:px-24 py-4 z-50 fixed top-0 transition-all duration-300 ${
                    isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
            >
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <img
                        src="../logo2.png"
                        alt="Company Logo"
                        className="h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[12rem] w-auto cursor-pointer transition-transform duration-200 hover:scale-105"
                    />

                    {/* Desktop Navigation Links & Buttons */}
                    <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-sm sm:text-base">
                        <a
                            href="#"
                            className={`transition-colors duration-300 ${
                                isScrolled
                                    ? "text-gray-800 hover:text-blue-600"
                                    : "text-white hover:text-blue-300"
                            }`}
                        >
                            Institution
                        </a>
                        <a
                            href="#"
                            className={`transition-colors duration-300 ${
                                isScrolled
                                    ? "text-gray-800 hover:text-blue-600"
                                    : "text-white hover:text-blue-300"
                            }`}
                        >
                            Study Abroad
                        </a>
                        <a
                            href="#"
                            className={`transition-colors duration-300 ${
                                isScrolled
                                    ? "text-gray-800 hover:text-blue-600"
                                    : "text-white hover:text-blue-300"
                            }`}
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className={`transition-colors duration-300 ${
                                isScrolled
                                    ? "text-gray-800 hover:text-blue-600"
                                    : "text-white hover:text-blue-300"
                            }`}
                        >
                            Test Prep
                        </a>
                        <a
                            href="#"
                            className={`transition-colors duration-300 ${
                                isScrolled
                                    ? "text-gray-800 hover:text-blue-600"
                                    : "text-white hover:text-blue-300"
                            }`}
                        >
                            Events
                        </a>
                        <a
                            href="#"
                            className={`transition-colors duration-300 ${
                                isScrolled
                                    ? "text-gray-800 hover:text-blue-600"
                                    : "text-white hover:text-blue-300"
                            }`}
                        >
                            Contact Us
                        </a>
                        <div className="flex gap-4 ml-6">
                            <button className="px-4 py-1.5 sm:px-6 sm:py-2 rounded-md shadow-md bg-[#c61bc6] hover:bg-[#a10ba1] text-white text-sm transition-colors duration-300">
                                Events
                            </button>
                            <button className="px-5 py-1.5 sm:px-7 sm:py-2 rounded-md shadow-md bg-[#157dcd] hover:bg-[#075692] text-white text-sm transition-colors duration-300">
                                Our Offices
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-6 w-6 transition-transform duration-300 ${
                                    isScrolled ? "text-gray-800" : "text-white"
                                } ${isMenuOpen ? "rotate-90" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isMenuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden mt-2 py-24 fixed w-full items-center flex justify-center px-4 rounded-md shadow-lg bg-white transition-all duration-300 z-20 ">
                    <div className="flex flex-col space-y-4 text-center font-semibold">
                        <a
                            href="#"
                            className="block  hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Institution
                        </a>
                        <a
                            href="#"
                            className="block  hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Study Abroad
                        </a>
                        <a
                            href="#"
                            className="block  hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            className="block  hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Test Prep
                        </a>
                        <a
                            href="#"
                            className="block  hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Events
                        </a>
                        <a
                            href="#"
                            className="block  hover:text-blue-300 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
