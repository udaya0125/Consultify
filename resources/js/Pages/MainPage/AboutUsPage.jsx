import Wrapper from "@/BarComponents/Wrapper";
import React from "react";
import { motion } from "framer-motion";

const AboutUsPage = () => {
    return (
        <Wrapper>
            <div className="font-sans text-gray-800">
                {/* === Hero Section === */}
                <section className="relative py-28 md:py-32 overflow-hidden bg-gradient-to-r from-[rgb(0,198,255)] to-[rgb(0,114,255)]">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-5 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 shadow-md backdrop-blur"
                        >
                            About Consultify
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            Empowering Nepalese Students Through
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400 block mt-2">
                                Global Education
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                        >
                            Since 2010, Consultify has been the bridge
                            connecting ambitious Nepalese students to
                            world-class education opportunities across the
                            globe.
                        </motion.p>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative order-2 md:order-1"
                        >
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Nepalese students in consultation"
                                    className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our Journey
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Consultify was founded by a group of
                                <strong> Nepalese education experts</strong> who
                                personally experienced the challenges of
                                pursuing international education. With
                                first-hand knowledge, we understood the unique
                                struggles of students from Nepal navigating
                                foreign systems.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                What began as a small initiative in Kathmandu
                                has now grown into one of Nepal’s most trusted
                                education consultancies, with offices in major
                                cities and partnerships with more than{" "}
                                <strong>200 global institutions</strong>.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our deep understanding of both Nepalese culture
                                and international education systems allows us to
                                provide personalized guidance that is both
                                culturally sensitive and academically excellent.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* === Mission & Vision Section === */}
                <section className="bg-gray-50 py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
                        {[
                            {
                                title: "Our Mission",
                                text: "To guide Nepalese students towards their academic dreams by offering reliable counseling, transparent processes, and ethical services that open doors to world-class universities across Canada, Australia, the UK, and beyond.",
                            },
                            {
                                title: "Our Vision",
                                text: "To be the leading educational consultancy in Nepal, known for shaping future global leaders who not only excel academically but also represent Nepal’s values and culture worldwide.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
                            >
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </Wrapper>
    );
};

export default AboutUsPage;
