import React, { useState } from "react";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    User,
    BookOpen,
    AlertCircle,
    MessageSquare,
} from "lucide-react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    const handleSubmit = async () => {
        const formErrors = validateForm();

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("");
        setErrors({});

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                course: "",
                message: "",
            });

            setTimeout(() => setSubmitStatus(""), 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen ">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ready to chase your dreams? Reach out to us today, and
                        let’s find the best academic path to help you succeed!
                    </p>
                </div>

                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2  p-8 lg:p-12 text-white relative overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/7942466/pexels-photo-7942466.jpeg"
                                alt=""
                                className="w-full rounded-lg h-[35rem] object-cover"
                            />
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="lg:w-1/2 p-8 lg:p-12">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="firstName"
                                            className="text-sm font-semibold text-gray-700 flex gap-1 items-center"
                                        >
                                            <User size={16} className="mr-2" />
                                            First Name 
                                             <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white ${
                                                errors.firstName
                                                    ? "border-red-300 focus:ring-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Enter your first name"
                                        />
                                        {errors.firstName && (
                                            <div className="flex items-center text-red-600 text-sm">
                                                <AlertCircle
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {errors.firstName}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label
                                            htmlFor="lastName"
                                            className="text-sm font-semibold text-gray-700 flex gap-1"
                                        >
                                            Last Name 
                                             <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white ${
                                                errors.lastName
                                                    ? "border-red-300 focus:ring-red-500"
                                                    : "border-gray-300"
                                            }`}
                                            placeholder="Enter your last name"
                                        />
                                        {errors.lastName && (
                                            <div className="flex items-center text-red-600 text-sm">
                                                <AlertCircle
                                                    size={14}
                                                    className="mr-1"
                                                />
                                                {errors.lastName}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-700 flex gap-1 items-center"
                                    >
                                        <Mail size={16} className="mr-2" />
                                        Email Address 
                                         <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white ${
                                            errors.email
                                                ? "border-red-300 focus:ring-red-500"
                                                : "border-gray-300"
                                        }`}
                                        placeholder="your.email@example.com"
                                    />
                                    {errors.email && (
                                        <div className="flex items-center text-red-600 text-sm">
                                            <AlertCircle
                                                size={14}
                                                className="mr-1"
                                            />
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="phone"
                                        className="text-sm font-semibold text-gray-700 flex items-center"
                                    >
                                        <Phone size={16} className="mr-2" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                                        placeholder="+977 98********"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="message"
                                        className="text-sm font-semibold text-gray-700 flex gap-1 items-center"
                                    >
                                        <MessageSquare  size={14}
                                                className="mr-1"/>
                                        Message 
                                        <span className="text-red-600">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white resize-none ${
                                            errors.message
                                                ? "border-red-300 focus:ring-red-500"
                                                : "border-gray-300"
                                        }`}
                                        placeholder="Enter Your Message..."
                                    />
                                    {errors.message && (
                                        <div className="flex items-center text-red-600 text-sm">
                                            <AlertCircle
                                                size={14}
                                                className="mr-1"
                                            />
                                            {errors.message}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:transform-none flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} className="mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {submitStatus === "success" && (
                                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-center animate-fade-in">
                                        <div className="flex items-center justify-center">
                                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                            "Your message has been sent
                                            successfully. Our team will contact
                                            you shortly."
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
