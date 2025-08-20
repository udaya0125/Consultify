import React from "react";

const NavBar = () => {
    return (
        <div className="w-full px-4 lg:px-24 py-4 z-50 fixed inset-0 ">
            <div className="flex items-center justify-between h-16">
                <img
                    src="../logo2.png"
                    alt="Company Logo"
                    className="h-[14rem] w-[14rem] cursor-pointer"
                />

                <div className="hidden md:flex gap-6 text-white  font-semibold ">
                    <a href="#" className="hover:text-blue-600">
                        Institution
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Study Abord
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Services
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Test Preparation
                    </a>
                    {/* <a href="#" className="hover:text-blue-600">
                        Scholarships
                    </a> */}
                    <a href="#" className="hover:text-blue-600">
                        Events
                    </a>
                    <a href="#" className="hover:text-blue-600">
                        Contact Us
                    </a>
                </div>
                <div className="flex gap-6 text-white">
                    <button className="px-7 py-1  bg-[#c61bc6] hover:bg-[#a10ba1] rounded-md shadow-md">Events</button>
                    <button className="px-8 py-1  bg-[#157dcd] hover:bg-[#075692] rounded-md shadow-md">Our Offices</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
