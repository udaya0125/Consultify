import axios from "axios";
import React, { useState } from "react";
import { Plus, Search, Upload, X } from "lucide-react";

const AddOurTeam = ({
  setReloadTrigger,
  searchQuery,
  setSearchQuery,
  sortOption,
  setSortOption,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [memberForm, setMemberForm] = useState({
    name: "",
    position: "",
    qualification: "",
    experience: "",
    facebook_link: "",
    whatsapp_link: "",
    phone_number: "",
    instagram_link: "",
    image: null,
  });

  // Handle Create Member
  const handleCreate = async (formData) => {
    try {
      await axios.post(route("team.store"), formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setReloadTrigger((prev) => !prev);
    } catch (error) {
      console.log("Error creating team member", error);
      throw error;
    }
  };

  // Handle Submit for adding
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append all form data
    for (const key in memberForm) {
      if (memberForm[key] !== null && memberForm[key] !== "") {
        formData.append(key, memberForm[key]);
      }
    }

    try {
      setSubmitting(true);
      await handleCreate(formData);

      // Reset form
      setMemberForm({
        name: "",
        position: "",
        qualification: "",
        experience: "",
        facebook_link: "",
        whatsapp_link: "",
        phone_number: "",
        instagram_link: "",
        image: null,
      });

      setShowForm(false);
    } catch (error) {
      console.log("Error saving data", error);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle change for inputs
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setMemberForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  return (
    <div>
      {/* Add Form Modal */}
      {showForm && (
        <div className="w-full flex justify-center h-full items-center fixed top-0 left-0 z-50 bg-black bg-opacity-50">
          <div className="relative px-6 py-6 rounded-xl w-full max-w-lg h-[600px] overflow-y-auto bg-white shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4"
            >
              <X className="" />
            </button>
            <h2 className="text-2xl text-center py-4">
              Add Team Member
            </h2>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={memberForm.name}
                    className="px-4 py-2 rounded-xl border"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label>Image</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="px-4 py-2 rounded-xl border border-gray-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Position</label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    onChange={handleChange}
                    value={memberForm.position}
                    className="px-4 py-2 rounded-xl border"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label>Qualification</label>
                  <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    onChange={handleChange}
                    value={memberForm.qualification}
                    className="px-4 py-2 rounded-xl border"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Experience</label>
                  <input
                    type="text"
                    name="experience"
                    id="experience"
                    onChange={handleChange}
                    value={memberForm.experience}
                    className="px-4 py-2 rounded-xl border"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Facebook Link</label>
                  <input
                    type="url"
                    name="facebook_link"
                    id="facebook_link"
                    onChange={handleChange}
                    value={memberForm.facebook_link}
                    className="px-4 py-2 rounded-xl border"
                    placeholder="https://facebook.com/username"
                  />
                </div>

                <div className="flex flex-col">
                  <label>WhatsApp Link</label>
                  <input
                    type="url"
                    name="whatsapp_link"
                    id="whatsapp_link"
                    onChange={handleChange}
                    value={memberForm.whatsapp_link}
                    className="px-4 py-2 rounded-xl border"
                    placeholder="https://wa.me/1234567890"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    onChange={handleChange}
                    value={memberForm.phone_number}
                    className="px-4 py-2 rounded-xl border"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Instagram Link</label>
                  <input
                    type="url"
                    name="instagram_link"
                    id="instagram_link"
                    onChange={handleChange}
                    value={memberForm.instagram_link}
                    className="px-4 py-2 rounded-xl border"
                    placeholder="https://instagram.com/username"
                  />
                </div>

                <button
                  disabled={submitting}
                  className="bg-blue-600 text-white px-4 py-3 rounded-xl mt-4"
                >
                  {submitting ? "Saving..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Table Controls */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 mt-10">
        <form className="relative w-full sm:w-64">
          <input
            type="text"
            name="query"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </form>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-[#9960fa] text-white py-2 px-4 rounded-xl text-sm hover:bg-purple-700"
          >
            <Plus />
            Add new
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOurTeam;