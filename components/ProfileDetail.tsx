import React, { useState, useEffect } from "react";
import { ProfileDetailsProps } from "@/interface/profileDetailProps";
import { FaEdit, FaSave } from "react-icons/fa";

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile || {});

  useEffect(() => {
    setFormData(profile || {});
  }, [profile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Nama depan, nama belakang, dan email wajib diisi!");
      return;
    }
    onSave(formData);
    setIsEditing(false);
  };

  const labelMap: Record<string, string> = {
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    email: "Email",
    phone: "Nomor Telepon",
    dateOfBirth: "Tanggal Lahir",
    role: "Peran",
    country: "Negara",
    city: "Kota",
  };

  return (
    <div className="mt-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Informasi Pribadi</h3>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="text-green-500 hover:text-green-700 flex items-center"
            >
              <FaSave className="mr-1" /> Simpan
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-orange-500 hover:text-orange-700 flex items-center"
            >
              <FaEdit className="mr-1" /> Edit
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {Object.entries(formData).map(
            ([key, value]) =>
              key !== "id" &&
              key !== "profileImage" && (
                <div key={key}>
                  <p className="text-gray-500 capitalize">
                    {labelMap[key] || key}
                  </p>
                  <input
                    type={key === "dateOfBirth" ? "date" : "text"} // Format tanggal
                    name={key}
                    value={value as string}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={`font-medium w-full p-2 border rounded-md ${
                      isEditing
                        ? "border-gray-400"
                        : "border-transparent bg-gray-100"
                    }`}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
