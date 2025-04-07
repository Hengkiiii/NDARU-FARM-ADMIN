"use client";
import React, { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import ProfileDetails from "@/components/ProfileDetail";
import { profileData } from "@/constants/ProfileData";
import { Profile } from "@/interface/profileProps";

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile>(profileData);

  // Fungsi untuk menyimpan perubahan dari ProfileDetails
  const handleSave = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
    console.log("Profil berhasil diperbarui:", updatedProfile);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <ProfileCard profile={profile} />
      <ProfileDetails profile={profile} onSave={handleSave} />
    </div>
  );
};

export default ProfilePage;
