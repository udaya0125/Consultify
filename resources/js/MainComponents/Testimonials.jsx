import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarav Patel",
      country: "Canada",
      program: "Masters in Computer Science",
      university: "University of Toronto",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Consultify made my dream of studying in Canada a reality. Their guidance was professional, timely, and incredibly supportive throughout the entire process.",
    },
    {
      id: 2,
      name: "Ananya Sharma",
      country: "Australia",
      program: "Bachelor of Nursing",
      university: "University of Sydney",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "From course selection to visa assistance, Consultify handled everything with care. I felt confident and well-prepared every step of the way.",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      country: "UK",
      program: "MBA",
      university: "University of Manchester",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      quote:
        "The team at Consultify is knowledgeable and genuinely invested in your success. They helped me secure a scholarship and settle in smoothly.",
    },
    {
      id: 4,
      name: "Priya Singh",
      country: "USA",
      program: "PhD in Biotechnology",
      university: "Stanford University",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "Consultify's expertise in research program applications was impressive. They helped me craft a compelling research proposal that got accepted.",
    },
    {
      id: 5,
      name: "Vikram Joshi",
      country: "Germany",
      program: "Masters in Mechanical Engineering",
      university: "Technical University of Munich",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      quote:
        "The visa process for Germany was complex, but Consultify made it seamless. Their knowledge of European education systems is exceptional.",
    },
    {
      id: 6,
      name: "Neha Gupta",
      country: "Canada",
      program: "Bachelor of Business Administration",
      university: "University of British Columbia",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "I was confused about which university to choose, but Consultify's personalized approach helped me find the perfect fit for my career goals.",
    },
    {
      id: 7,
      name: "Arjun Kumar",
      country: "Australia",
      program: "Masters in Data Science",
      university: "University of Melbourne",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote:
        "Consultify's post-admission support was invaluable. They helped me with accommodation and even connected me with alumni networks.",
    },
    {
      id: 8,
      name: "Sneha Reddy",
      country: "UK",
      program: "LLM in International Law",
      university: "University of Oxford",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote:
        "Getting into Oxford seemed like a distant dream, but Consultify's strategic guidance made it possible. Their mock interviews were particularly helpful.",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // This disables the arrows completely
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 w-full px-4 lg:px-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their study abroad dreams with <span className="text-blue-600 font-semibold">Consultify</span>.
          </p>
        </div>

        <div className="testimonial-slider relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 focus:outline-none">
                <div className="bg-white p-6 rounded-xl shadow-lg h-full hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.program}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 italic mb-4 leading-relaxed">"{testimonial.quote}"</p>

                  <div className="border-t pt-4">
                    <p className="text-sm text-blue-600 font-medium">{testimonial.university}</p>
                    <p className="text-xs text-gray-500">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;