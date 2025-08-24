import BlogForm from "@/AddFormComponents.jsx/BlogForm";
import DashboardWrapper from "@/DashboardComponents/DashboardWrapper";
import React, { useState } from "react";

const BlogTableDetails = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <DashboardWrapper>
            <div className="py-6 w-full px-6 md:px-12 md:w-[82%] mt-20 md:mt-0 pt-24 ml-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Service Details
                    </h2>
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-5 py-3 bg-red-600 text-white font-medium text-lg rounded-xl shadow-md hover:bg-red-700 transition-colors duration-200"
                    >
                        + Add Details
                    </button>
                </div>

                <BlogForm showForm={showForm} setShowForm={setShowForm} />

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300 overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/33432010/pexels-photo-33432010.jpeg"
                            alt="Blog"
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-5">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Topic Title
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Veniam numquam doloremque,
                                quae, id atque sed quod delectus molestias
                                aliquid eum error tenetur, aspernatur nemo
                                accusantium laudantium.
                            </p>
                            <div className="flex justify-center gap-5">
                                <button className="mt-4 text-red-600 font-medium hover:underline">
                                    Edit
                                </button>
                                <button className="mt-4 text-red-600 font-medium hover:underline">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    );
};

export default BlogTableDetails;
