import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Globe, BookOpen } from "lucide-react";
import Wrapper from "@/BarComponents/Wrapper";
import parse from "html-react-parser";

const BlogDetails = ({ blog }) => {
    console.log(blog);
    // const skyVariants = {
    //     animate: {
    //         background: [
    //             "linear-gradient(135deg, #0c4a6e 0%, #075985 25%, #0369a1 50%, #0284c7 75%, #0ea5e9 100%)",
    //             "linear-gradient(135deg, #075985 0%, #0369a1 25%, #0284c7 50%, #0ea5e9 75%, #38bdf8 100%)",
    //             "linear-gradient(135deg, #0369a1 0%, #0284c7 25%, #0ea5e9 50%, #38bdf8 75%, #7dd3fc 100%)",
    //             "linear-gradient(135deg, #0284c7 0%, #0ea5e9 25%, #38bdf8 50%, #7dd3fc 75%, #bae6fd 100%)",
    //             "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 25%, #7dd3fc 50%, #bae6fd 75%, #e0f2fe 100%)",
    //             "linear-gradient(135deg, #38bdf8 0%, #7dd3fc 25%, #bae6fd 50%, #e0f2fe 75%, #f0f9ff 100%)",
    //             "linear-gradient(135deg, #7dd3fc 0%, #bae6fd 25%, #e0f2fe 50%, #f0f9ff 75%, #bae6fd 100%)",
    //             "linear-gradient(135deg, #bae6fd 0%, #e0f2fe 25%, #f0f9ff 50%, #bae6fd 75%, #7dd3fc 100%)",
    //             "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%)",
    //             "linear-gradient(135deg, #f0f9ff 0%, #bae6fd 25%, #7dd3fc 50%, #38bdf8 75%, #0ea5e9 100%)",
    //             "linear-gradient(135deg, #bae6fd 0%, #7dd3fc 25%, #38bdf8 50%, #0ea5e9 75%, #0284c7 100%)",
    //             "linear-gradient(135deg, #7dd3fc 0%, #38bdf8 25%, #0ea5e9 50%, #0284c7 75%, #0369a1 100%)",
    //             "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 25%, #0284c7 50%, #0369a1 75%, #075985 100%)",
    //             "linear-gradient(135deg, #0ea5e9 0%, #0284c7 25%, #0369a1 50%, #075985 75%, #0c4a6e 100%)",
    //             "linear-gradient(135deg, #0c4a6e 0%, #075985 25%, #0369a1 50%, #0284c7 75%, #0ea5e9 100%)",
    //         ],
    //         transition: {
    //             duration: 20,
    //             ease: "easeInOut",
    //             repeat: Infinity,
    //             times: [
    //                 0, 0.07, 0.14, 0.21, 0.28, 0.35, 0.42, 0.49, 0.56, 0.63,
    //                 0.7, 0.77, 0.84, 0.91, 1,
    //             ],
    //         },
    //     },
    // };

    // Floating cloud shapes animation
    // const cloudVariants = {
    //     animate: {
    //         x: [0, 30, -20, 40, -15, 25, 0],
    //         y: [0, -10, 15, -8, 20, -5, 0],
    //         scale: [1, 1.1, 0.9, 1.15, 0.85, 1.05, 1],
    //         opacity: [0.3, 0.6, 0.4, 0.7, 0.5, 0.8, 0.3],
    //         transition: {
    //             duration: 18,
    //             ease: "easeInOut",
    //             repeat: Infinity,
    //             times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1],
    //         },
    //     },
    // };

    // Storm wave effect for the bottom portion
    // const stormWaveVariants = {
    //     animate: {
    //         clipPath: [
    //             "ellipse(150% 100% at 50% 100%)",
    //             "ellipse(160% 90% at 45% 100%)",
    //             "ellipse(140% 110% at 55% 100%)",
    //             "ellipse(170% 95% at 40% 100%)",
    //             "ellipse(130% 105% at 60% 100%)",
    //             "ellipse(150% 100% at 50% 100%)",
    //         ],
    //         background: [
    //             "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.8) 0%, rgba(3, 105, 161, 0.6) 50%, rgba(12, 74, 110, 0.4) 100%)",
    //             "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.7) 0%, rgba(14, 165, 233, 0.5) 50%, rgba(3, 105, 161, 0.3) 100%)",
    //             "radial-gradient(ellipse at center, rgba(125, 211, 252, 0.6) 0%, rgba(56, 189, 248, 0.4) 50%, rgba(14, 165, 233, 0.2) 100%)",
    //             "radial-gradient(ellipse at center, rgba(186, 230, 253, 0.5) 0%, rgba(125, 211, 252, 0.3) 50%, rgba(56, 189, 248, 0.1) 100%)",
    //             "radial-gradient(ellipse at center, rgba(125, 211, 252, 0.6) 0%, rgba(56, 189, 248, 0.4) 50%, rgba(14, 165, 233, 0.2) 100%)",
    //             "radial-gradient(ellipse at center, rgba(14, 165, 233, 0.8) 0%, rgba(3, 105, 161, 0.6) 50%, rgba(12, 74, 110, 0.4) 100%)",
    //         ],
    //         transition: {
    //             duration: 15,
    //             ease: "easeInOut",
    //             repeat: Infinity,
    //         },
    //     },
    // };

    // Atmospheric shimmer effect
    // const shimmerVariants = {
    //     animate: {
    //         background: [
    //             "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 100%)",
    //             "linear-gradient(45deg, transparent 20%, rgba(255, 255, 255, 0.1) 65%, rgba(255, 255, 255, 0.2) 70%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)",
    //             "linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 85%, rgba(255, 255, 255, 0.2) 90%, rgba(255, 255, 255, 0.1) 95%, transparent 100%)",
    //             "linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 100%)",
    //         ],
    //         x: ["-100%", "100%", "100%", "-100%"],
    //         transition: {
    //             duration: 12,
    //             ease: "easeInOut",
    //             repeat: Infinity,
    //         },
    //     },
    // };

    const topUniversities = [
        {
            rank: 1,
            name: "University of Oxford",
            location: "Oxford",
            worldRank: 5,
            score: 95.9,
        },
        {
            rank: 2,
            name: "University of Cambridge",
            location: "Cambridge",
            worldRank: 7,
            score: 94.8,
        },
        {
            rank: 3,
            name: "Imperial College London",
            location: "London",
            worldRank: 8,
            score: 94.1,
        },
        {
            rank: 4,
            name: "UCL (University College London)",
            location: "London",
            worldRank: 10,
            score: 92.4,
        },
        {
            rank: 5,
            name: "London School of Economics",
            location: "London",
            worldRank: 49,
            score: 87.2,
        },
        {
            rank: 6,
            name: "University of Edinburgh",
            location: "Edinburgh",
            worldRank: 20,
            score: 89.8,
        },
        {
            rank: 7,
            name: "King's College London",
            location: "London",
            worldRank: 31,
            score: 88.5,
        },
        {
            rank: 8,
            name: "University of Manchester",
            location: "Manchester",
            worldRank: 27,
            score: 88.9,
        },
    ];

    const consultancyFeatures = [
        {
            icon: Users,
            title: "Expert Counselors",
            desc: "20+ years experience in UK admissions",
        },
        {
            icon: Award,
            title: "High Success Rate",
            desc: "95% visa approval rate",
        },
        {
            icon: Globe,
            title: "University Partners",
            desc: "Direct partnerships with 200+ UK universities",
        },
        {
            icon: BookOpen,
            title: "Course Guidance",
            desc: "Comprehensive course selection support",
        },
    ];

    return (
        <Wrapper>
            <div className="">
                <div className="bg-sky-800 h-[10rem] relative overflow-hidden">
                   
                    <div
                        className="absolute top-8 left-12 w-24 h-12 rounded-full"
                        style={{
                            background:
                                "radial-gradient(ellipse, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)",
                        }}
                    />

                    <div
                        className="absolute top-16 right-20 w-32 h-8 rounded-full"
                        style={{
                            background:
                                "radial-gradient(ellipse, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 70%, transparent 100%)",
                        }}
                    />

                    <div
                        className="absolute top-6 left-1/2 w-20 h-10 rounded-full"
                        style={{
                            background:
                                "radial-gradient(ellipse, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.12) 70%, transparent 100%)",
                        }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-20" />

                    <div className="absolute inset-0 pointer-events-none" />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0.1) 100%)",
                        }}
                    />
                </div>

                {/* Main Content Section */}
                <div className="px-4 md:px-8 lg:px-28 py-12">
                    {/* Article Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                            Best Universities in the {blog.title} 2025 -
                            Complete University Rankings & Study Guide
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            {blog.short_description}
                        </p>

                        {/* Featured Image */}
                        <div className="  rounded-xl mb-8 flex items-center justify-center relative overflow-hidden">
                            <img
                                src={`/storage/${blog.image}`}
                                alt=""
                                className="w-full h-[30rem] object-cover"
                            />
                        </div>
                    </div>

                    {/* Article Content */}
                    <div>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">
                            {parse(blog.long_description)}
                        </p>
                    </div>

                    {/* Top Universities Ranking */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            Top 10 Universities in the UK 2024
                        </h2>

                        {/* Table */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                            UK Rank
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                            Global Rank
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
                                            University
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            5
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            University of Oxford
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            2
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            7
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            University of Cambridge
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            3
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            8
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            Imperial College London
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            4
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            10
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            UCL (University College London)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            5
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            20
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            University of Edinburgh
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            6
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            27=
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            The University of Manchester
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            7
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            31=
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            King's College London (KCL)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            8
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            49
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            London School of Economics and
                                            Political Science (LSE)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            9
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            58
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            University of Bristol
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                                            10
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-600">
                                            73.2
                                        </td>
                                        <td className="px-6 py-4 text-lg text-blue-600 font-medium">
                                            The University of Warwick
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};
export default BlogDetails;
