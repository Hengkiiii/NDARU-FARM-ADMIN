"use client";
import React, { useState } from "react";
import { GrafikComponentProps } from "@/interface/GrafikComponetProps";
import { dataKeuangan } from "@/constants/dataKeuangan";
import { dataPengunjung } from "@/constants/dataPengunjung";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaFilter } from "react-icons/fa";

const Grafik: React.FC<GrafikComponentProps> = ({ type }) => {
  const [filter, setFilter] = useState<"mingguan" | "bulanan" | "tahunan">(
    "bulanan"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const rawData = type === "keuangan" ? dataKeuangan : dataPengunjung;

  const filterData = () => {
    if (filter === "mingguan") {
      return rawData.slice(-4);
    } else if (filter === "tahunan") {
      return rawData.filter((_, index) => index % 2 === 0);
    }
    return rawData;
  };

  const data = filterData();

  const dataKey1 = type === "keuangan" ? "pemasukan" : "pengunjung";
  const dataKey2 = type === "keuangan" ? "pengeluaran" : "penjualan";
  const color1 = type === "keuangan" ? "#4f46e5" : "#16a34a";
  const color2 = type === "keuangan" ? "#dc2626" : "#facc15";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto relative">
      <h2 className="text-xl font-semibold text-center mb-4">
        {type === "keuangan"
          ? "Grafik Keuangan"
          : "Grafik Pengunjung & Penjualan"}
      </h2>

      {/* Dropdown Filter */}
      <div className="relative flex justify-end mb-4 ">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="p-3 hover:bg-gray-300 rounded-lg"
        >
          <FaFilter className="text-gray-600" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
            {["mingguan", "bulanan", "tahunan"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setFilter(item as "mingguan" | "bulanan" | "tahunan");
                  setDropdownOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm ${
                  filter === item ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 40, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey1}
            stroke={color1}
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey={dataKey2}
            stroke={color2}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Grafik;
