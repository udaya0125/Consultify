import { Link } from "@inertiajs/react";
import { Earth, GraduationCap, Handshake, Scroll, Users, Award, Target, BookOpen } from "lucide-react";
import React from "react";

const AboutUs = () => {
    return (
        <section className="w-full px-4 md:px-8 lg:px-28 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row gap-10 items-center">
            {/* Image Container */}
            <div className="w-full lg:w-[40%] relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-red-100 to-blue-100 rounded-2xl transform -rotate-2 -z-10"></div>
                <img
                    src="../about.png"
                    alt="Team of education consultants helping students"
                    className="w-full h-[30rem] object-cover rounded-2xl shadow-lg relative z-10"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-3 rounded-xl shadow-lg z-20">
                    <Users className="w-6 h-6" />
                </div>
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg z-20">
                    <Award className="w-6 h-6" />
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full lg:w-[60%] space-y-6">
                <header>
                    <h2 className="text-lg text-red-600 font-semibold uppercase tracking-wide relative inline-block">
                        About Us
                        <span className="block border-b-2 border-dotted border-red-600 mt-1"></span>
                    </h2>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mt-4">
                        We Are Your Trusted <span className="text-red-600">Education Partner</span>
                    </h1>
                </header>

                <p className="text-gray-600 text-base leading-relaxed">
                    Our consultancy has been guiding students for over a decade,
                    helping them achieve their dreams of studying abroad. 
                    We specialize in Canada, Australia, UK, and New Zealand 
                    with personalized counseling, visa guidance, and admission support.
                </p>

                {/* Stats Section */}
                <div className="grid grid-cols-2 gap-4 py-2">
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <p className="text-2xl font-bold text-red-600">1000+</p>
                        <p className="text-sm text-gray-600">Students Helped</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                        <p className="text-2xl font-bold text-blue-600">50+</p>
                        <p className="text-sm text-gray-600">Partner Institutions</p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                    <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-red-100">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-3 mb-3">
                            <div className="p-2 bg-red-50 rounded-lg">
                                <GraduationCap className="w-5 h-5 text-red-600" />
                            </div>
                            Expert Guidance
                        </h3>
                        <p className="text-sm text-gray-600">
                            Experienced counselors to guide you step-by-step through the entire process.
                        </p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-100">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <Earth className="w-5 h-5 text-blue-600" />
                            </div>
                            Global Network
                        </h3>
                        <p className="text-sm text-gray-600">
                            Strong partnerships with top universities and institutions worldwide.
                        </p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-100">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-3 mb-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <Scroll className="w-5 h-5 text-green-600" />
                            </div>
                            Visa Support
                        </h3>
                        <p className="text-sm text-gray-600">
                            Complete assistance with visa applications and documentation.
                        </p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-yellow-100">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-3 mb-3">
                            <div className="p-2 bg-yellow-50 rounded-lg">
                                <Handshake className="w-5 h-5 text-yellow-500" />
                            </div>
                            Personalized Service
                        </h3>
                        <p className="text-sm text-gray-600">
                            Tailored solutions for your unique academic and career goals.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link 
                        href={`aboutus`} 
                        className="px-6 py-3 bg-red-600 text-white rounded-xl font-medium shadow-md hover:bg-red-700 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    >
                        <BookOpen className="w-5 h-5" />
                        Learn More
                    </Link>
                    {/* <Link 
                        href={`contact`} 
                        className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    >
                        <Target className="w-5 h-5" />
                        Get Started
                    </Link> */}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;