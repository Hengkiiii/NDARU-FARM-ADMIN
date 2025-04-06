import React from "react";
import Grafik from "@/components/grafik";
import {
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaChartLine,
  FaExclamationTriangle,
} from "react-icons/fa";

const Content: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 flex flex-col w-full">
      {/* Section Pemasukan & Pengeluaran */}
      <div className="flex space-x-6 mb-6 w-full">
        <div className="bg-white shadow-md rounded-lg p-6 w-1/2 flex items-center space-x-4">
          <FaMoneyBillWave className="text-green-600 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Pemasukan</h2>
            <div className="text-green-600 font-bold text-lg">
              Rp 10.000.000
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-1/2 flex items-center space-x-4">
          <FaMoneyCheckAlt className="text-red-600 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Pengeluaran</h2>
            <div className="text-red-600 font-bold text-lg">Rp 7.500.000</div>
          </div>
        </div>
      </div>

      {/* Section Statistik & Notifikasi */}
      <div className="flex space-x-6 mb-6 w-full">
        <div className="bg-white shadow-md rounded-lg p-6 w-1/2 flex items-center space-x-4">
          <FaChartLine className="text-blue-600 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Keuntungan</h2>
            <div className="text-blue-600 font-bold text-lg">
              Rp 2.500.000 (25%)
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-1/2 flex items-center space-x-4">
          <FaExclamationTriangle className="text-yellow-600 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Minus</h2>
            <div className="text-yellow-600 font-bold text-lg"> Rp 0 (0%)</div>
          </div>
        </div>
      </div>

      {/* Section Grafik */}
      <div className="w-full flex space-x-4">
        <div className="w-1/2">
          <Grafik type="keuangan" />
        </div>
        <div className="w-1/2">
          <Grafik type="pengunjung" />
        </div>
      </div>
    </div>
  );
};

export default Content;
