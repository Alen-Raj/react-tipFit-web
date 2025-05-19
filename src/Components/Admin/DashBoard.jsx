import React from "react";

const Dashboard = () => {
  return (
    <div style={{ marginLeft: "270px", padding: "90px 30px", backgroundColor: "#f4f7fc", minHeight: "100vh" }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: "900px"
      }}>
        <div>
          <h1 style={{ fontSize: "28px", color: "#3e2a68", marginBottom: "10px" }}>Welcome to the Dashboard</h1>
          <p style={{ fontSize: "16px", color: "#333" }}>Here you can manage all the core admin functionalities with ease.</p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828677.png" 
          alt="Dashboard Icon"
          style={{ width: "120px", height: "120px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
