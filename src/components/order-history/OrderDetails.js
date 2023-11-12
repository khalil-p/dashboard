import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import { adminServices } from "../../services/admin.services";


export default function OrderDetails() {
  const [jsonData, setJsonData] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    // /api/getOrderDailyLis
    const fetchProductsList = async () => {
      const data = await adminServices.getDeleveryDailyList("6550efae6e62379c90a2d342").then((res) => {
        console.log(res ,"result");
          const row1 = res.data.data.map((item, index) => {
              return { id: index + 1, ...item };
          });
          console.log(row1  ,"Order");

          // setJsonData(res.data.data.orders);
          setRows(row1);
      });
  };
    useEffect(() => {
  
      fetchProductsList();
      setIsLoading(false)
  }, []);
  return (
    <div>
      <h1> Order Details</h1>
      <h3>Date:22-02-2023 sunday</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order. No.</TableCell>
              <TableCell align="center">Dish</TableCell>
              <TableCell align="center">Qty.</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Date & Day</TableCell>
              <TableCell align="center">Cash to collect</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.cartItems[0].productId.name}</TableCell>
                <TableCell align="center">{row.cartItems[0].quantity}</TableCell>
                <TableCell align="center">{row.totalPrice}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.totalPrice + row.deleveryCharges}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "5rem",
          padding: "1rem",
        }}
      >
        <p>Total Orders Completed Amount by TURAB KHAN</p>{" "}
        <p style={{ fontWeight: 600 }}>600</p>
      </div>
    </div>
  );
}
