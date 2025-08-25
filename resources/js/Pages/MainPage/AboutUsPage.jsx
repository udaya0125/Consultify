import Wrapper from "@/BarComponents/Wrapper";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    Facebook,
    Twitter,
    Phone,
    Linkedin,
} from "lucide-react";

const team = [
    {
        name: "Anita Shrestha",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        position: "Founder & CEO",
        qualification:
            "M.Ed. in International Education, University of Toronto",
        experience:
            "Over 15 years of experience guiding Nepalese students to top universities in Canada, the UK, and Australia.",
    },
    {
        name: "Rajesh Thapa",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        position: "Senior Education Consultant",
        qualification: "M.A. in International Relations, University of London",
        experience:
            "12 years of expertise in UK and European university admissions with 1000+ successful placements.",
    },
    {
        name: "Sunita Gurung",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        position: "Visa Processing Specialist",
        qualification: "Certified Immigration Consultant, ICCRC",
        experience:
            "Expert in visa documentation and processing with a 99% success rate for student visas.",
    },
    {
        name: "Bikram Singh",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        position: "Test Preparation Head",
        qualification: "M.A. in English Literature, Tribhuvan University",
        experience:
            "Specialized in IELTS/TOEFL preparation with 10+ years of teaching experience.",
    },
    {
        name: "Priya Sharma",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        position: "Student Counselor",
        qualification: "M.Sc. in Psychology, University of Melbourne",
        experience:
            "Provides personalized guidance and support for students adapting to new cultures.",
    },
];

const AboutUsPage = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Wrapper>
            <div className="font-sans text-gray-800 overflow-hidden">
                <section className="relative py-28 md:py-36 overflow-hidden bg-gradient-to-br from-sky-400 via-sky-500 to-sky-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

                    <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
                        <span className="inline-block px-5 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6 shadow-lg backdrop-blur-md border border-white/10">
                            <BookOpen className="inline-block w-4 h-4 mr-2" />
                            About Consultify
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Empowering Nepalese Students Through
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400 block mt-2">
                                Global Education
                            </span>
                        </h1>

                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                            Since 2010, Consultify has been the bridge
                            connecting ambitious Nepalese students to
                            world-class education opportunities across the
                            globe.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 mr-2" />
                                Our Services
                            </button>
                            <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                                <Users className="w-5 h-5 mr-2" />
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/5 backdrop-blur-sm"></div>
                </section>

                <section className="py-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300"
                                >
                                    {stat.icon}
                                    <h3 className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                                        {stat.number}
                                    </h3>
                                    <p className="text-gray-600">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* === Our Journey Section === */}
                <section className="max-w-6xl mx-auto px-6 py-4 md:py-12">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Nepalese students in consultation"
                                    className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
                        </div>

                        <div className="order-1 md:order-2">
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
                        </div>
                    </div>
                </section>

                {/* === Mission & Vision Section === */}
                <section className=" py-4 md:py-12">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Guiding principles that define our approach to
                                student success
                            </p>
                        </div>

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
                                <div
                                    key={i}
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
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Meet Our Leadership
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Experienced professionals dedicated to your
                                success
                            </p>
                        </div>

                        <Slider {...sliderSettings}>
                            {team.map((item, index) => (
                                <div key={index} className="px-4 h-[32rem]">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                                        <div className="h-60 overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                {item.name}
                                            </h3>
                                            <p className="text-blue-600 font-medium mb-2">
                                                {item.position}
                                            </p>
                                            <p className="text-sm text-gray-700 font-semibold mb-2">
                                                {item.qualification}
                                            </p>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.experience}
                                            </p>
                                        </div>
                                        <div className="flex justify-center gap-2">
                                            <Facebook />
                                            <Twitter />
                                            <Phone />
                                            <Linkedin />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </section>
            </div>
        </Wrapper>
    );
};

export default AboutUsPage;
