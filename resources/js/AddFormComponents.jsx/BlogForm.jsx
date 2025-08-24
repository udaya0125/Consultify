import React, { useState } from "react";
import { Upload, MapPin, Globe, Award, FileText, Camera, X } from "lucide-react";

const BlogForm = ({ showForm, setShowForm }) => {
    const [formData, setFormData] = useState({
        title: "",
        image: null,
        shortDescription: "",
        longDescription: "",
        countryRank: "",
        globalRank: "",
        universityName: "",
    });

    const [imagePreview, setImagePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                image: file,
            }));

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission here
    };

    return (
        <div
            className={`min-h-screen  py-12 px-4 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${
                showForm ? "block" : "hidden"
            }`}
        >
            <div className=" mx-auto relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={()=> setShowForm(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <X className="h-6 w-6" />
                </button>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-3xl shadow-2xl p-8 space-y-8"
                >
                    {/* Title */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                            <FileText
                                className="mr-3 text-blue-500"
                                size={22}
                            />
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-lg"
                            placeholder="Enter the title"
                        />
                    </div>

                    {/* University Name */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                            <Award className="mr-3 text-purple-500" size={22} />
                            University Name
                        </label>
                        <input
                            type="text"
                            name="universityName"
                            value={formData.universityName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 text-lg"
                            placeholder="Enter university name"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                            <Camera className="mr-3 text-green-500" size={22} />
                            University Image
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-all duration-300 relative">
                            {imagePreview ? (
                                <div className="space-y-4">
                                    <img
                                        src={imagePreview}
                                        alt="University preview"
                                        className="mx-auto h-32 w-32 object-cover rounded-lg shadow-lg"
                                    />
                                    <p className="text-sm text-gray-600">
                                        Click to change image
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    <p className="text-lg text-gray-600">
                                        Click to upload university image
                                    </p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Rankings */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                                <MapPin
                                    className="mr-3 text-red-500"
                                    size={22}
                                />
                                Country Rank
                            </label>
                            <input
                                type="number"
                                name="countryRank"
                                value={formData.countryRank}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all duration-300 text-lg"
                                placeholder="e.g., 15"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                                <Globe
                                    className="mr-3 text-indigo-500"
                                    size={22}
                                />
                                Global Rank
                            </label>
                            <input
                                type="number"
                                name="globalRank"
                                value={formData.globalRank}
                                onChange={handleInputChange}
                                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 text-lg"
                                placeholder="e.g., 150"
                            />
                        </div>
                    </div>

                    {/* Short Description */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                            <FileText
                                className="mr-3 text-orange-500"
                                size={22}
                            />
                            Short Description
                        </label>
                        <textarea
                            name="shortDescription"
                            value={formData.shortDescription}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-lg resize-none"
                            placeholder="Brief description of the university (2-3 sentences)"
                        />
                        <div className="text-right text-sm text-gray-500">
                            {formData.shortDescription.length}/200 characters
                        </div>
                    </div>

                    {/* Long Description */}
                    <div className="space-y-2">
                        <label className="flex items-center text-lg font-semibold text-gray-700 mb-3">
                            <FileText
                                className="mr-3 text-teal-500"
                                size={22}
                            />
                            Long Description
                        </label>
                        <textarea
                            name="longDescription"
                            value={formData.longDescription}
                            onChange={handleInputChange}
                            rows="6"
                            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all duration-300 text-lg resize-none"
                            placeholder="Detailed description including history, programs, facilities, achievements, etc."
                        />
                        <div className="text-right text-sm text-gray-500">
                            {formData.longDescription.length}/1000 characters
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-purple-200"
                        >
                            Save University Information
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;
