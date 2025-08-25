import React, { useState } from "react";
import { Upload, FileText, Camera, X } from "lucide-react";
import axios from "axios";
import ReactQuill from "react-quill"; 
import "react-quill/dist/quill.snow.css"; 

const AddBlogForm = ({ showForm, setShowForm, setReloadTrigger }) => {
    const [universityForm, setUniversityForm] = useState({
        title: "",
        image: "",
        short_description: "",
        long_description: "",
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(universityForm).forEach((key) => {
            if (universityForm[key]) {
                formData.append(key, universityForm[key]);
            }
        });

        try {
            await axios.post(route("blogs.store"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setReloadTrigger((prev) => !prev);
            resetForm();
            setShowForm(false);
        } catch (error) {
            console.error("Error creating blog:", error.response?.data || error.message);
            alert("Failed to create blog. Please try again.");
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (e.target.type === "file") {
            const file = files[0];
            if (file) {
                setUniversityForm((prev) => ({
                    ...prev,
                    [name]: file,
                }));
                const reader = new FileReader();
                reader.onloadend = () => setImagePreview(reader.result);
                reader.readAsDataURL(file);
            }
        } else {
            setUniversityForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleQuillChange = (value) => {
        const textOnly = value.replace(/<[^>]*>/g, ""); // Strip HTML for character count
        if (textOnly.length <= 1000) {
            setUniversityForm((prev) => ({
                ...prev,
                long_description: value,
            }));
        }
    };

    const resetForm = () => {
        setUniversityForm({
            title: "",
            image: "",
            short_description: "",
            long_description: "",
        });
        setImagePreview(null);
    };

    return (
        <div
            className={`min-h-screen py-12 px-4 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
                showForm ? "block" : "hidden"
            }`}
        >
            <div className="mx-auto relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => {
                        setShowForm(false);
                        resetForm();
                    }}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="h-6 w-6" />
                </button>

                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Blog</h2>

                    {/* Title */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700">
                            <FileText className="mr-3 text-blue-500" size={22} />
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={universityForm.title}
                            onChange={handleChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg"
                            placeholder="Enter the title"
                            required
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700">
                            <Camera className="mr-3 text-green-500" size={22} />
                            Blog Image
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-all duration-300 relative">
                            {imagePreview ? (
                                <div className="space-y-4">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="mx-auto h-32 w-32 object-cover rounded-lg shadow-lg"
                                    />
                                    <p className="text-sm text-gray-600">Click to change image</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="text-lg text-gray-600">Click to upload image</p>
                                </div>
                            )}
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Short Description */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700">
                            <FileText className="mr-3 text-orange-500" size={22} />
                            Short Description
                        </label>
                        <textarea
                            name="short_description"
                            value={universityForm.short_description}
                            onChange={handleChange}
                            rows="3"
                            maxLength="200"
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-lg resize-none"
                            placeholder="Brief description (2-3 sentences)"
                            required
                        />
                        <div className="text-right text-sm text-gray-500">
                            {universityForm.short_description.length}/200 characters
                        </div>
                    </div>

                    {/* Long Description with React Quill */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700">
                            <FileText className="mr-3 text-teal-500" size={22} />
                            Long Description
                        </label>
                        <div className="border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-teal-500 transition-all duration-300">
                            <ReactQuill
                                value={universityForm.long_description}
                                onChange={handleQuillChange}
                                theme="snow"
                                placeholder="Write a detailed description (e.g., history, programs, facilities, achievements...)"
                                className="bg-white"
                                style={{ height: "200px" }}
                                modules={{
                                    toolbar: [
                                        [{ header: "1" }, { header: "2" }],
                                        ["bold", "italic", "underline"],
                                        [{ list: "ordered" }, { list: "bullet" }],
                                        ["link"],
                                        ["clean"],
                                    ],
                                }}
                            />
                        </div>
                        <div className="text-right text-sm text-gray-500">
                            {universityForm.long_description.replace(/<[^>]*>/g, "").length}/1000 characters
                            {universityForm.long_description.replace(/<[^>]*>/g, "").length > 900 && (
                                <span className="block text-orange-500">
                                    {universityForm.long_description.replace(/<[^>]*>/g, "").length > 1000
                                        ? "Exceeded limit!"
                                        : "Approaching limit!"}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-purple-200"
                        >
                            Create Blog
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlogForm;