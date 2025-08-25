import React, { useEffect, useState } from "react";
import Wrapper from "@/BarComponents/Wrapper";
import { Link } from "@inertiajs/react";
import { ChevronRight, Home } from "lucide-react";

const ITEMS_PER_PAGE = 9;

const Blog = () => {
    const [allUniversity, setAllUniversity] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(route("blogs.index"));
                const data = response.data;
                const blogArray = Array.isArray(data) ? data : data.data || [];
                setAllUniversity(blogArray);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setAllUniversity([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const totalPages = Math.ceil(allUniversity.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = allUniversity.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    };

    // Skeleton Loader Component
    const SkeletonCard = () => (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6 space-y-4">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded mt-4"></div>
            </div>
        </div>
    );

    if (loading) {
        return (
            <Wrapper>
                <div className="px-4 md:px-8 lg:px-28 py-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                            Loading Articles...
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Please wait while we fetch the latest blogs.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        {[...Array(ITEMS_PER_PAGE)].map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <div className="px-4 md:px-8 lg:px-28 py-20">
                {/* Breadcrumb */}
                <nav className="text-gray-500 mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-1 text-sm">
                        <li className="flex items-center">
                            <Link
                                href="/"
                                className="hover:text-cyan-600 transition-colors duration-200 flex items-center"
                            >
                                <Home
                                    className="w-4 h-4 mr-1"
                                    aria-hidden="true"
                                />
                                Home
                            </Link>
                        </li>
                        <li>
                            <ChevronRight
                                className="w-3 h-3 mx-1 text-gray-400"
                                aria-hidden="true"
                            />
                        </li>
                        <li>
                            <span className="text-gray-800 font-medium">
                                Blog
                            </span>
                        </li>
                    </ol>
                </nav>

                {/* Blog Cards Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
                    {currentItems.length > 0 ? (
                        currentItems.map((blog) => (
                            <article
                                key={blog.id}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl  transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={`/storage/${blog.image}`}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-200 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                        {blog.short_description}
                                    </p>
                                    <div className="mt-6">
                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            className="inline-flex items-center gap-1 text-cyan-600 font-semibold hover:text-cyan-800 transition-colors duration-200 group/read-more"
                                        >
                                            Read More
                                            <ChevronRight
                                                size={16}
                                                className="transform translate-x-0 group-hover/read-more:translate-x-1 transition-transform duration-200"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-16 mx-auto text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-gray-700">
                                No articles found
                            </h3>
                            <p className="text-gray-500 mt-1">
                                Check back later for new posts.
                            </p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="flex items-center px-4 py-2.5 text-sm font-medium text-cyan-600 bg-cyan-50 rounded-lg hover:bg-cyan-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            <ChevronRight
                                className="w-4 h-4 mr-1 rotate-180"
                                aria-hidden="true"
                            />
                            Previous
                        </button>

                        {getPageNumbers().map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    currentPage === page
                                        ? "bg-cyan-500 text-white shadow-md shadow-cyan-200"
                                        : "text-gray-700 hover:bg-cyan-100 hover:text-cyan-700"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="flex items-center px-4 py-2.5 text-sm font-medium text-cyan-600 bg-cyan-50 rounded-lg hover:bg-cyan-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Next
                            <ChevronRight
                                className="w-4 h-4 ml-1"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default Blog;
