import React from "react";
import Sidebar from "@/components/sidebar";
import Content from "@/app/beranda/components/konten";

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Content />
      </div>
    </div>
  );
};

export default App;
