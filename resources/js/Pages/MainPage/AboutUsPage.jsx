import Wrapper from "@/BarComponents/Wrapper";
import React from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Globe,
    Users,
    Target,
    Award,
    BookOpen,
    Star,
    ShieldCheck,
    Rocket,
    Calendar,
} from "lucide-react";

// Animation variants for cleaner code
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const AboutUsPage = () => {
    return (
        <Wrapper>
            <div className="font-sans text-gray-800 overflow-hidden">
                {/* === Hero Section === */}
                <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

                    <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-block px-5 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 shadow-lg backdrop-blur-md border border-white/10"
                        >
                            <BookOpen className="inline-block w-4 h-4 mr-2" />
                            About Consultify
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                        >
                            Empowering Nepalese Students Through
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 block mt-2">
                                Global Education
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
                        >
                            Since 2010, Consultify has been the bridge
                            connecting ambitious Nepalese students to
                            world-class education opportunities across the
                            globe.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Our Services
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                                <Users className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                        </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/5 backdrop-blur-sm"></div>
                </section>

                {/* === Stats Section === */}
                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={staggerChildren}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        >
                            {[
                                {
                                    number: "5,000+",
                                    label: "Students Guided",
                                    icon: (
                                        <Users className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                                    ),
                                },
                                {
                                    number: "200+",
                                    label: "Partner Institutions",
                                    icon: (
                                        <Globe className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                                    ),
                                },
                                {
                                    number: "15+",
                                    label: "Countries",
                                    icon: (
                                        <Award className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                                    ),
                                },
                                {
                                    number: "98%",
                                    label: "Success Rate",
                                    icon: (
                                        <Star className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                                    ),
                                },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                                >
                                    {stat.icon}
                                    <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                                        {stat.number}
                                    </h3>
                                    <p className="text-gray-600">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* === Our Journey Section === */}
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
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <span className="inline-flex items-center px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                                <Calendar className="w-4 h-4 mr-1" />
                                Our Story
                            </span>
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
                                has now grown into one of Nepal's most trusted
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

                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <ShieldCheck className="h-6 w-6" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Trusted Guidance
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Ethical counseling since 2010
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* === Mission & Vision Section === */}
                <section className=" py-20 md:py-28">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Guiding principles that define our approach to
                                student success
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {[
                                {
                                    title: "Our Mission",
                                    text: "To guide Nepalese students towards their academic dreams by offering reliable counseling, transparent processes, and ethical services that open doors to world-class universities across Canada, Australia, the UK, and beyond.",
                                    icon: <Rocket className="h-10 w-10" />,
                                    color: "bg-blue-100 text-blue-700",
                                },
                                {
                                    title: "Our Vision",
                                    text: "To be the leading educational consultancy in Nepal, known for shaping future global leaders who not only excel academically but also represent Nepal's values and culture worldwide.",
                                    icon: <Target className="h-10 w-10" />,
                                    color: "bg-amber-100 text-amber-700",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: i * 0.2,
                                        duration: 0.8,
                                    }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                                >
                                    <div
                                        className={`w-16 h-16 rounded-xl ${item.color} flex items-center justify-center mb-6`}
                                    >
                                        {item.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 ">
                    <div className="max-w-6xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Meet Our Leadership
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Experienced professionals dedicated to your
                                success
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((item) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="h-60 overflow-hidden">
                                        <img
                                            src={`https://images.unsplash.com/photo-15${item}6928212?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                                            alt="Team member"
                                            className="w-full h-full object-cover hover:scale-105 transition duration-700"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                                            John Doe
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-4">
                                            Founder & CEO
                                        </p>
                                        <p className="text-gray-600">
                                            Education specialist with over 15
                                            years of experience in international
                                            student counseling.
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Wrapper>
    );
};

export default AboutUsPage;
