import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { adminServices } from "../services/admin.services";

function DashBoardDetails() {
  const [dashboardData , setDashboardData] = useState({
    user:0,
    deliveryBoy:0,
    order:0


  })
  const fetchProductsList = async () => {
    const data = await adminServices.DashboardList().then((res) => {
    setDashboardData({
      user:res.data.data.userCount,
      deliveryBoy:res.data.data.deliveryBoyCount,
      order:res.data.data.completedOrderCount
    })
    });
  };
  useEffect(()=>{
fetchProductsList()
  },[])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{ minWidth: 275, backgroundColor: "#FFEBCD", marginLeft: "3rem" }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Total Numbers of Users
            </Typography>
            <br />
            <br />
            <Typography variant="h4">{dashboardData.user}</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 275, marginLeft: "5rem", backgroundColor: "#FFEBCD" }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Total Numbers of Workers
            </Typography>
            <br />
            <Typography variant="h4">{dashboardData.deliveryBoy}</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 275, marginLeft: "5rem", backgroundColor: "#FFEBCD" }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Total Numbers of sell
            </Typography>
            <br />
            <br />
            <Typography variant="h4">{dashboardData.order}</Typography>
          </CardContent>
        </Card>
      </div>
      <div style={{ padding: "1rem" ,margin:'auto'}}>
        <img src="https://lh3.googleusercontent.com/p/AF1QipPk5rlcSlgneDVSYcPDNmYkSbR_mY6M3znPNI93=s680-w680-h510" />
      </div>
    </div>
  );
}

export default DashBoardDetails;
