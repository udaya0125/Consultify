import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import React from "react";

const university = [
    {
        name: "Best universities in Australia",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&auto=format",
        description:'Australia hosts world-ranked universities offering diverse programs, strong research, and multicultural campuses, attracting international students seeking quality education and global opportunities.',
            slug:'australia-68abf477b84db'
    },
    {
        name: "Best universities in USA 2022",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=250&fit=crop&auto=format",
        description:'The USA offers world-leading universities, diverse programs, and cutting-edge research, attracting global students with strong academic opportunities and career pathways.',
            slug:'usa-68abf54a0bbd9',
    },
    {
        name: "Best Universities in UK",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=250&fit=crop&auto=format",
        description:'The UK hosts world-renowned universities with strong research, diverse programs, and rich traditions, attracting global students to pursue quality education and career opportunities.',
            slug:'uk-68abf521451ff',
    },
    {
        name: "Best Universities in Canada",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop&auto=format",
        description:'Canada is renowned for top universities, diverse programs, and a multicultural learning environment, attracting international students seeking quality education and research opportunities.',
            slug:'canada-68aacf1f2f8a2',
    },
];

const BestUniversity = () => {
    return (
        <div className="w-full px-4 lg:px-24 py-12">
            <div className="mb-8 flex justify-between">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Best Universities by Country
                </h2>
                <Link href={`/blog`} className="bg-red-600 hover:bg-red-700 px-4 py-3 shadow-md rounded-lg text-white">
                    View More
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {university.map((item, index) => (
                    <div
                        key={index}
                        className="  overflow-hidden hover:shadow-lg hover:rounded-2xl transition-shadow duration-300"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105  transition-transform duration-300 rounded-lg shadow-md"
                            />
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-tight">
                                {item.name}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            <Link href={`/blog/${item.slug}`} className="text-cyan-400 text-sm font-medium hover:text-cyan-500 transition-colors duration-200 flex items-center gap-1">
                                Read More
                                <ChevronRight />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestUniversity;
