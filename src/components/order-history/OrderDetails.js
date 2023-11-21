import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router";
import { adminServices } from "../../services/admin.services";

export default function OrderDetails() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // /api/getOrderDailyLis
  const fetchProductsList = async () => {
    const data = await adminServices.getDeleveryDailyList(id).then((res) => {
      const row1 = res.data.data.map((item, index) => {
        return { id: index + 1, ...item };
      });

      const totalAmount = res.data.data.reduce((accumulator, item, index) => {
        return accumulator + item.totalPrice + item.deleveryCharges;
      }, 0);
      setTotalAmount(totalAmount); // setJsonData(res.data.data.orders);
      setRows(row1);
    });
  };
  useEffect(() => {
    fetchProductsList();
    setIsLoading(false);
  }, []);
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();
  const current_date = dd + "/" + mm + "/" + yyyy;

  return (
    <div>
      <h1> Order Details</h1>
      <h3>{current_date}</h3>
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
            {rows.map((row) => {
              return (
                <TableRow key={row.name} sx={{ "": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">
                    {row.cartItems[0].productId.name}
                  </TableCell>
                  <TableCell align="center">
                    {row.cartItems[0].quantity}
                  </TableCell>
                  <TableCell align="center">{row.totalPrice}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">
                    {row.totalPrice + row.deleveryCharges}
                  </TableCell>
                </TableRow>
              );
            })}
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
        <p>Total Orders Completed Amount </p>{" "}
        <p style={{ fontWeight: 600 }}>{totalAmount}</p>
      </div>
    </div>
  );
}
