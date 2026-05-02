import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8F9FC" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          marginLeft: "220px", // match sidebar width
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;