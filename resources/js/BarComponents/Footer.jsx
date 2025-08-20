import React from "react";
import { Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    {/* Brand Section */}
                    <div className="lg:w-1/4">
                        <div className="flex items-center mb-6">
                            <img
                                src="/logo7.png"
                                alt="Consultify Logo"
                                className="w-[40rem] h-[5rem] cursor-pointer  object-cover"
                            />
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Empowering students to achieve their global education dreams with expert guidance and support.
                        </p>
                        
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-slate-800 rounded-md hover:bg-slate-700"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-500 transition-colors p-2 bg-slate-800 rounded-md hover:bg-slate-700"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-600 transition-colors p-2 bg-slate-800 rounded-md hover:bg-slate-700"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                                Quick Links
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="#"
                                    className=" text-gray-400 hover:text-white transition-colors text-sm flex items-center"
                                >
                                    About Us
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Message From Chairman
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Testimonials
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Blog
                                </a>
                            </div>
                        </div>

                        {/* Explore Country */}
                        <div>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                                Explore Country
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Study in Australia
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Study in USA
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Study in UK
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Study in Canada
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Other Countries
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                                Services
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Career Counselling
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Visa Application Assistance
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Pre and Post Departure Briefings
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    Scholarship Guidance
                                </a>
                                <a
                                    href="#"
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    University Selection
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                                Contact Us
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin size={18} className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                                    <p className="text-gray-400 text-sm">
                                        123 Education Street, Academic District, 10001
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <Mail size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                                    <a href="mailto:info@consultify.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                                        info@consultify.com
                                    </a>
                                </div>
                                <div className="flex items-center">
                                    <Phone size={18} className="text-blue-400 mr-3 flex-shrink-0" />
                                    <a href="tel:+15551234567" className="text-gray-400 hover:text-white text-sm transition-colors">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <span className="text-gray-500 text-sm">
                                © 2025 Consultify. All rights reserved.
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a
                                href="#"
                                className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                                Security
                            </a>
                            <a
                                href="#"
                                className="text-gray-500 hover:text-white text-sm transition-colors"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;