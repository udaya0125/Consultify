import { Link } from "@inertiajs/react";
import { Earth, GraduationCap, Handshake, Scroll } from "lucide-react";
import React from "react";

const AboutUs = () => {
    return (
        <div className="w-full px-4 md:px-8 lg:px-28 py-12 flex flex-col lg:flex-row gap-10 items-center">


            <div className="w-full lg:w-[40%]">
                <div>
                    <img
                        src="../about.png"
                        alt="About Us"
                        className="w-full h-[30rem] object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>

            <div className="w-full lg:w-[60%] space-y-5">
                

                <h2 className="text-lg text-red-600 font-semibold uppercase tracking-wide relative inline-block">
                    About Us
                    <span className="block border-b-2 border-dotted border-red-600 mt-1"></span>
                </h2>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                    We Are Your Trusted <span className="text-red-600">Education Partner</span>
                </h1>
                <p className="text-gray-600 text-base leading-relaxed">
                    Our consultancy has been guiding students for over a decade,
                    helping them achieve their dreams of studying abroad. 
                    We specialize in Canada, Australia, UK, and New Zealand 
                    with personalized counseling, visa guidance, and admission support.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-red-600" />
                            Expert Guidance
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Experienced counselors to guide you step-by-step.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <Earth className="w-5 h-5 text-blue-600" />
                            Global Network
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Strong partnerships with top universities worldwide.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <Scroll className="w-5 h-5 text-green-600" />
                            Visa Support
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Complete assistance with visa applications and documents.
                        </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <Handshake className="w-5 h-5 text-yellow-500" />
                            Personalized Service
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Tailored solutions for your academic & career goals.
                        </p>
                    </div>
                </div>

                <Link href={`aboutus`} className="mt-6 px-6 py-3 bg-red-600 text-white rounded-xl font-medium shadow-md hover:bg-red-700 transition cursor-pointer">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;
