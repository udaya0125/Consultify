import { Earth, GraduationCap, Handshake, Scroll } from "lucide-react";
import React from "react";

const ChooseUs = () => {
    return (
        <section className="px-4 md:px-8 lg:px-28 py-12 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Content Section */}
                <div className="w-full lg:w-[60%] gap-6 flex flex-col justify-center">
                    <div className="space-y-4">
                        <div className="inline-block">
                            <h2 className="text-lg text-red-600 font-semibold uppercase tracking-wide">Why Choose Us?</h2>
                            <span className="block w-full h-0.5 bg-red-600/30 mt-1"></span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Why You Should Start Learning With Us?</h1>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nobis eaque fugit quibusdam beatae cum officiis vitae, laboriosam sunt placeat eum ducimus minus porro corporis odio impedit nam magni dolorem!
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid gap-4 mt-6">
                        <div className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-red-50 rounded-full">
                                    <GraduationCap className="w-5 h-5 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Skilled Instructors</h3>
                                    <p className="text-sm text-gray-600 mt-1">Experienced counselors to guide you step-by-step.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-blue-50 rounded-full">
                                    <Earth className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">International Certification</h3>
                                    <p className="text-sm text-gray-600 mt-1">Strong partnerships with top universities worldwide.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-green-50 rounded-full">
                                    <Scroll className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Online Support</h3>
                                    <p className="text-sm text-gray-600 mt-1">Complete assistance with visa applications and documents.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-yellow-50 rounded-full">
                                    <Handshake className="w-5 h-5 text-yellow-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Personalized Service</h3>
                                    <p className="text-sm text-gray-600 mt-1">Tailored solutions for your academic & career goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[40%] flex items-center">
                    <div className="relative overflow-hidden  aspect-[4/5] w-full">
                        <img 
                            src="../7.png" 
                            alt="Happy students learning" 
                            className="w-full h-[80vh] object-cover rounded-lg"
                            loading="lazy"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;