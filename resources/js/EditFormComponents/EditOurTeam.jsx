import axios from "axios";
import React, { useState } from "react";
import { X } from "lucide-react";

const EditOurTeam = ({
  editingMember,
  setEditingMember,
  handleUpdate,
  setReloadTrigger,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [memberForm, setMemberForm] = useState({
    name: editingMember?.name || "",
    position: editingMember?.position || "",
    qualification: editingMember?.qualification || "",
    experience: editingMember?.experience || "",
    facebook_link: editingMember?.facebook_link || "",
    whatsapp_link: editingMember?.whatsapp_link || "",
    phone_number: editingMember?.phone_number || "",
    instagram_link: editingMember?.instagram_link || "",
    image: null,
  });

  // Handle change for inputs
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setMemberForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle Submit for editing
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append all form data except image if it's empty
    for (const key in memberForm) {
      if (memberForm[key] !== null && memberForm[key] !== "") {
        formData.append(key, memberForm[key]);
      }
    }

    try {
      setSubmitting(true);
      await handleUpdate(formData, editingMember.id);
      
      // Reset and close
      setEditingMember(null);
    } catch (error) {
      console.log("Error updating data", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full flex justify-center h-full items-center fixed top-0 left-0 z-50 bg-black bg-opacity-50">
      <div className="relative px-6 py-6 rounded-xl w-full max-w-lg h-[600px] overflow-y-auto bg-white shadow-2xl">
        <button
          onClick={() => setEditingMember(null)}
          className="absolute top-4 right-4"
        >
          <X className="" />
        </button>
        <h2 className="text-2xl text-center py-4">
          Edit Team Member
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
              {editingMember &&
                editingMember.image &&
                !memberForm.image && (
                  <div className="mb-2">
                    <img
                      src={`/storage/${editingMember.image}`}
                      alt=""
                      className="w-16 h-16 rounded-full border"
                    />
                    <p className="text-sm text-gray-500">
                      Current Photo
                    </p>
                  </div>
                )}
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
              {submitting ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditOurTeam;