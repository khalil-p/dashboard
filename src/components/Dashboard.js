import React from "react";
import "./dashboard.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <div
        style={{
          borderLeft: "1px solid rgba(0, 0, 0, 0.13)",
          paddingLeft: "1rem",
          paddingTop: "0.8vw",
          paddingRight: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "0.4vw",
          }}
        >
          <img
            src="https://res.cloudinary.com/dr01qtrz5/image/upload/e_improve:outdoor/odzju1vmjidrrok3ciug.jpg"
            style={{ width: "15vw", mixBlendMode: "multiply" }}
          />
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
// sx={{ minWidth: 275 }}
