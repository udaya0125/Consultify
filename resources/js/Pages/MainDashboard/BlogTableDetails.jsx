import AddBlogForm from "@/AddFormComponents.jsx/AddBlogForm";
import DashboardWrapper from "@/DashboardComponents/DashboardWrapper";
import EditBlogForm from "@/EditFormComponents/EditBlogForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BlogTableDetails = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [allUniversity, setAllUniversity] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editing, setEditing] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        const fetchUniversity = async () => {
            try {
                const response = await axios.get(route("blogs.index"));
                const data = response.data;
                const blogArray = Array.isArray(data) ? data : data.data;
                setAllUniversity(blogArray || []);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                setAllUniversity([]);
            }
        };

        fetchUniversity();
    }, [reloadTrigger]);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this blog?")) return;

        try {
            await axios.delete(route("blogs.destroy", { id }));
            setReloadTrigger((prev) => !prev);
        } catch (error) {
            console.error("Delete error:", error);
            alert("Failed to delete the blog.");
        }
    };

    const handleEdit = (blog) => {
        setEditing(blog);
        setShowEditForm(true);
    };

    return (
        <DashboardWrapper>
            <div className="py-6 w-full px-6 md:px-12 md:w-[82%] mt-20 md:mt-0 pt-24 ml-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Service Details</h2>
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="px-5 py-3 bg-red-600 text-white font-medium text-lg rounded-xl shadow-md hover:bg-red-700 transition-colors duration-200"
                    >
                        Add Details
                    </button>
                </div>

                {/* Add Form */}
                <AddBlogForm
                    showForm={showAddForm}
                    setShowForm={setShowAddForm}
                    setReloadTrigger={setReloadTrigger}
                />

                {/* Edit Form */}
                <EditBlogForm
                    showForm={showEditForm}
                    setShowForm={setShowEditForm}
                    editing={editing}
                    setEditing={setEditing}
                    setReloadTrigger={setReloadTrigger}
                />

                {/* Blog Cards Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {allUniversity.length > 0 ? (
                        allUniversity
                            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                            .map((blog) => (
                                <div
                                    key={blog.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 overflow-hidden"
                                >
                                    <img
                                        src={`/storage/${blog.image}`}
                                        alt={blog.title}
                                        className="w-full h-52 object-cover"
                                    />
                                    <div className="p-5">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {blog.short_description}
                                        </p>
                                        <div className="flex justify-center gap-5 mt-4">
                                            <button
                                                onClick={() => handleEdit(blog)}
                                                className="text-red-600 font-medium hover:underline"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(blog.id)}
                                                className="text-red-600 font-medium hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            No blog entries found.
                        </p>
                    )}
                </div>

                {/* Pagination Controls */}
                {Math.ceil(allUniversity.length / itemsPerPage) > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-8">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        {Array.from(
                            { length: Math.ceil(allUniversity.length / itemsPerPage) },
                            (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-4 py-2 rounded-md transition-colors ${
                                        currentPage === i + 1
                                            ? "bg-red-600 text-white"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    {i + 1}
                                </button>
                            )
                        )}

                        <button
                            disabled={currentPage === Math.ceil(allUniversity.length / itemsPerPage)}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </DashboardWrapper>
    );
};

export default BlogTableDetails;