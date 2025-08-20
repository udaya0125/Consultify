import React from "react";
import { GraduationCap, Globe2, FileText, Users, Plane, BookOpen, ArrowRight, Star, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Career Counseling",
    description: "Get expert guidance to choose the right career path and educational opportunities abroad.",
    icon: <Users className="w-12 h-12 text-gray-500" />,
    features: ["1-on-1 Sessions", "Career Assessment", "Industry Insights"],
   
  },
  {
    title: "University Admissions",
    description: "Assistance in applying to top universities worldwide with personalized application support.",
    icon: <GraduationCap className="w-12 h-12 text-gray-500" />,
    features: ["Application Review", "Essay Writing", "Interview Prep"],
    
  },
  {
    title: "Visa Assistance",
    description: "Comprehensive support in student visa application and documentation.",
    icon: <FileText className="w-12 h-12 text-gray-500" />,
    features: ["Document Review", "Application Filing", "Interview Training"],
   
  },
  {
    title: "Test Preparation",
    description: "Preparation courses for IELTS, TOEFL, GRE, GMAT, and other international exams.",
    icon: <BookOpen className="w-12 h-12 text-gray-500" />,
    features: ["Mock Tests", "Study Materials", "Score Guarantee"],
    
  },
  {
    title: "Study Abroad Programs",
    description: "Explore a wide range of study programs in Canada, Australia, UK, and more.",
    icon: <Globe2 className="w-12 h-12 text-gray-500" />,
    features: ["Program Matching", "Scholarship Info", "University Partners"],
   
  },
  {
    title: "Pre-Departure Guidance",
    description: "Get orientation and travel support before starting your international journey.",
    icon: <Plane className="w-12 h-12 text-gray-500" />,
    features: ["Travel Planning", "Cultural Orientation", "Accommodation"],
  
  },
];

const stats = [
  { number: "5000+", label: "Students Placed" },
  { number: "50+", label: "Partner Universities" },
  { number: "98%", label: "Visa Success Rate" },
  { number: "15+", label: "Years Experience" }
];

const OurServices = () => {
  return (
    <div className="w-full min-h-screen py-12">
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-white">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your dreams into reality with our comprehensive study abroad solutions
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl  mb-6`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button - Centered */}
                <div className="flex justify-center">
                  <button className="bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="py-12">
        <div 
      className="py-12 text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-sm font-medium">Available 24/7</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact <span className="font-bold bg-white/20 px-3 py-1 rounded-lg">Consultify</span> today and let us help you achieve your education dreams abroad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="bg-red-600 text-white border-2 border-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-700 hover:border-red-700 transition-colors duration-200 flex items-center gap-2">
              Call Us Now
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Proven Success</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default OurServices;