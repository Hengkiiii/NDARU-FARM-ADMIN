import React from "react";
import { ProfileCardProps } from "@/interface/profileCardProps";
import { FaCamera, FaTrash } from "react-icons/fa";

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-6 relative">
      <div className="relative">
        <img
          src={profile.profileImage || "/profil.jpg"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <span className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow">
          <FaCamera className="text-gray-600" />
        </span>
      </div>
      <div>
        <h2 className="text-lg font-semibold">
          {profile.firstName} {profile.lastName}
        </h2>
        <p className="text-gray-500">{profile.role}</p>
        <p className="text-gray-500">
          {profile.city}, {profile.country}
        </p>
      </div>
      {/* Tombol Hapus */}
      <div className="absolute top-10 right-4">
        <button
          onClick={() => {
            if (
              window.confirm("Apakah Anda yakin ingin menghapus profil ini?")
            ) {
              onDelete();
            }
          }}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          <FaTrash className="text-lg" /> Hapus Profil
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
