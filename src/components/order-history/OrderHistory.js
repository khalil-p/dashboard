import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

function createData(sr, name, calories, fat, carbs, protein, last) {
  return { sr, name, calories, fat, carbs, protein, last };
}

const rows = [
  createData(1, "Laiq", "5/4/2022", 5, 4, 2, true),
  createData(2, "Rizwan", "5/4/2022", 5, 4, 2,<h3>Order Details</h3>),
  createData(3, "Ayan", "5/4/2022", 5, 4, 2,<h3>Order Details</h3>),
];

export default function OrderHistory() {
    const navigate = useNavigate();

  return (
    <>
      <h1> Madni Restaurants Daily Billing</h1>
      <h3>Date:22-02-2023 sunday</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SR. No.</TableCell>
              <TableCell align="center">Delivery Boy</TableCell>
              <TableCell align="center">Date & Day</TableCell>
              <TableCell align="center">Accepted Order</TableCell>
              <TableCell align="center">Declined Order</TableCell>
              <TableCell align="center">Completed Order</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ "": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.sr}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">{row.last && <button onClick={()=> navigate('OrderDetails')}>Order Details</button>}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
