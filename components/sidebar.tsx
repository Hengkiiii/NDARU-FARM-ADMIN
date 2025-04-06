"use client";
import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaBox,
  FaChartLine,
  FaUser,
  FaSignOutAlt,
  FaShieldAlt,
  FaUserCheck,
  FaChevronDown,
} from "react-icons/fa";
import { SidebarItemProps } from "@/interface/SidebarItemProps";

const SidebarItem: React.FC<
  SidebarItemProps & { children?: React.ReactNode; isActive?: boolean }
> = ({ title, icon, children, onClick, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    if (children) setIsOpen(!isOpen);
  };

  return (
    <li>
      <div
        className={`flex items-center justify-between gap-3 p-3 rounded-lg cursor-pointer transition-all 
          ${isActive ? "bg-gray-500 text-white" : "hover:bg-gray-700"}`}
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </div>
        {children && (
          <FaChevronDown size={14} className={isOpen ? "rotate-180" : ""} />
        )}
      </div>
      {isOpen && children && <ul className="ml-6 space-y-2">{children}</ul>}
    </li>
  );
};

const Sidebar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>("Beranda");

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    console.log(`Menu clicked: ${menu}`);
  };

  return (
    <div className="w-64 h-screen bg-green-950 text-white flex flex-col p-4">
      {/* Header Sidebar */}
      <h2 className="text-xl font-bold mb-6">NDARU FARM</h2>

      {/* Menu Sidebar */}
      <ul className="space-y-2 flex-grow">
        <SidebarItem
          title="Beranda"
          icon={<FaHome size={20} />}
          isActive={activeMenu === "Beranda"}
          onClick={() => handleMenuClick("Beranda")}
        />
        <SidebarItem title="Partisipan" icon={<FaUsers size={20} />}>
          <li
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all 
              ${
                activeMenu === "Admin"
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-700"
              }`}
            onClick={() => handleMenuClick("Admin")}
          >
            <FaShieldAlt size={18} />
            Admin
          </li>
          <li
            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all 
              ${
                activeMenu === "Pengguna"
                  ? "bg-gray-500 text-white"
                  : "hover:bg-gray-700"
              }`}
            onClick={() => handleMenuClick("Pengguna")}
          >
            <FaUserCheck size={18} />
            Pengguna
          </li>
        </SidebarItem>
        <SidebarItem
          title="Produk"
          icon={<FaBox size={20} />}
          isActive={activeMenu === "Produk"}
          onClick={() => handleMenuClick("Produk")}
        />
        <SidebarItem
          title="Aktifitas"
          icon={<FaChartLine size={20} />}
          isActive={activeMenu === "Aktifitas"}
          onClick={() => handleMenuClick("Aktifitas")}
        />
        <SidebarItem
          title="Profile"
          icon={<FaUser size={20} />}
          isActive={activeMenu === "Profile"}
          onClick={() => handleMenuClick("Profile")}
        />
        <SidebarItem
          title="Logout"
          icon={<FaSignOutAlt size={20} />}
          isActive={activeMenu === "Logout"}
          onClick={() => handleMenuClick("Logout")}
        />
      </ul>

      {/* Footer Sidebar */}
      <footer className="mt-4 text-center text-sm text-gray-300">
        <p>&copy; 2025 BhinekaDev</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
