import AddOurTeam from "@/AddFormComponents.jsx/AddOurTeam";
import DashboardWrapper from "@/DashboardComponents/DashboardWrapper";
import EditOurTeam from "@/EditFormComponents/EditOurTeam";
import axios from "axios";
import {
    SquarePen,
    Trash2,
    Facebook,
    Instagram,
    Phone,
    MessageCircle,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const OurTeamTable = () => {
    const [teamData, setTeamData] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("none");
    const [viewMode, setViewMode] = useState("card");

    // Fetch team data - FIXED
    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await axios.get(route("team.index"));
                const data = Array.isArray(response.data)
                    ? response.data
                    : response.data.data || [];
                setTeamData(data);
            } catch (error) {
                console.error("Error fetching team data:", error);
                setTeamData([]);
            }
        };

        fetchTeam();
    }, [reloadTrigger]);

    // Handle Delete
    const handleDelete = async (id) => {
        if (
            !window.confirm("Are you sure you want to delete this team member?")
        )
            return;
        try {
            console.log('delete succefully')
          const response=  await axios.delete(route("team.destroy", { id }));
          console.log(response.data)
            setReloadTrigger((prev) => !prev);
            
        } catch (error) {
            console.error("Delete error:", error);
            alert("Failed to delete")
        }
    };

    // Handle Edit
    const handleEdit = (member) => {
        setEditingMember(member);
    };

    // Handle Update
    const handleUpdate = async (formData, id) => {
        try {
            formData.append("_method", "PUT");
            const response = await axios.post(
                route("team.update", { id }),
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setReloadTrigger((prev) => !prev);
            return response.data;
        } catch (error) {
            console.error("Error updating team member:", error);
            throw error;
        }
    };

    // Filter and sort team data
    const filteredTeam = Array.isArray(teamData)
        ? teamData.filter(
              (member) =>
                  member.name
                      ?.toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                  member.position
                      ?.toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                  member.qualification
                      ?.toLowerCase()
                      .includes(searchQuery.toLowerCase())
          )
        : [];

    return (
        <DashboardWrapper>
            <div className="py-6 w-full px-6 md:px-12 md:w-[82%] mt-20 md:mt-0 pt-24 ml-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Our Team
                    </h1>

                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <button
                            onClick={() => setViewMode("card")}
                            className={`px-4 py-2 rounded-lg flex items-center ${
                                viewMode === "card"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            Card View
                        </button>
                        <button
                            onClick={() => setViewMode("table")}
                            className={`px-4 py-2 rounded-lg flex items-center ${
                                viewMode === "table"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5 4a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H5zM3 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm4 2a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7zm-2 4a1 1 0 011-1h6a1 1 0 110 2H6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Table View
                        </button>
                    </div>
                </div>

                {/* AddOurTeam Component */}
                <AddOurTeam
                    editingMember={editingMember}
                    setEditingMember={setEditingMember}
                    handleUpdate={handleUpdate}
                    setReloadTrigger={setReloadTrigger}
                    reloadTrigger={reloadTrigger}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {editingMember && (
                    <EditOurTeam
                        editingMember={editingMember}
                        setEditingMember={setEditingMember}
                        handleUpdate={handleUpdate}
                        setReloadTrigger={setReloadTrigger}
                    />
                )}

                {/* Table View */}
                {viewMode === "table" ? (
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Team Member
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Position
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Qualification
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Experience
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredTeam.length > 0 ? (
                                        filteredTeam.map((member, index) => (
                                            <tr
                                                key={member.id || index}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img
                                                                className="h-10 w-10 rounded-full object-cover"
                                                                src={
                                                                    member.image
                                                                        ? `/storage/${member.image}`
                                                                        : "https://via.placeholder.com/40"
                                                                }
                                                                alt={
                                                                    member.name
                                                                }
                                                            />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {member.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        {member.position}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900 max-w-xs">
                                                        {member.qualification}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900 max-w-md">
                                                        {member.experience}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button
                                                        onClick={() =>
                                                            handleEdit(member)
                                                        }
                                                        className="text-blue-600 hover:text-blue-900 mr-3 flex items-center"
                                                    >
                                                        <SquarePen
                                                            size={16}
                                                            className="mr-1"
                                                        />
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                member.id
                                                            )
                                                        }
                                                        className="text-red-600 hover:text-red-900 flex items-center"
                                                    >
                                                        <Trash2
                                                            size={16}
                                                            className="mr-1"
                                                        />
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="px-6 py-4 text-center text-gray-500"
                                            >
                                                No team members found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    /* Card View */
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {filteredTeam.length > 0 ? (
                            filteredTeam.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img
                                            src={
                                                member.image
                                                    ? `/storage/${member.image}`
                                                    : "https://via.placeholder.com/300x200"
                                            }
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 right-4 flex space-x-2">
                                            <button
                                                onClick={() =>
                                                    handleEdit(member)
                                                }
                                                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                                                aria-label="Edit"
                                            >
                                                <SquarePen size={16} />
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDelete(member.id)
                                                }
                                                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                                                aria-label="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 font-medium mt-1">
                                            {member.position}
                                        </p>

                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold text-gray-700">
                                                Qualification
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {member.qualification}
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold text-gray-700">
                                                Experience
                                            </h4>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {member.experience}
                                            </p>
                                        </div>

                                        {/* Social Links using Lucide Icons */}
                                        <div className="mt-4 flex space-x-4">
                                            {member.facebook_link && (
                                                <a
                                                    href={member.facebook_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:text-blue-800"
                                                >
                                                    <Facebook size={20} />
                                                </a>
                                            )}
                                            {member.instagram_link && (
                                                <a
                                                    href={member.instagram_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-pink-600 hover:text-pink-800"
                                                >
                                                    <Instagram size={20} />
                                                </a>
                                            )}
                                            {member.whatsapp_link && (
                                                <a
                                                    href={member.whatsapp_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-green-600 hover:text-green-800"
                                                >
                                                    <MessageCircle size={20} />
                                                </a>
                                            )}
                                            {member.phone_number && (
                                                <a
                                                    href={`tel:${member.phone_number}`}
                                                    className="text-gray-600 hover:text-gray-800"
                                                >
                                                    <Phone size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500 py-6">
                                No team members found.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </DashboardWrapper>
    );
};

export default OurTeamTable;
