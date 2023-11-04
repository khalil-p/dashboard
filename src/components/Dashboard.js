import React from "react";
import "./dashboard.css";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />
      <div
        style={{
          borderLeft: "1px solid rgba(0, 0, 0, 0.13)",
          paddingLeft: "1rem",
          paddingTop: "1rem",
          paddingRight: "1rem",
        }}
      >
        <div style={{display:'flex' ,justifyContent:'center' ,padding:'1rem'}}>

        <img src="https://res.cloudinary.com/dr01qtrz5/image/upload/e_improve:outdoor/odzju1vmjidrrok3ciug.jpg" style={{width:'300px'}}/>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
// sx={{ minWidth: 275 }}
