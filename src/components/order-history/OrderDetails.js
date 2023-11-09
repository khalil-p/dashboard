import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";

function createData(sr, name, calories, fat, carbs, protein) {
  return { sr, name, calories, fat, carbs, protein,};
}

const rows = [
  createData(1, "Shwrma",4 , 80, "5/4/2022 (Monday)", 320,),
  createData(2, "Chicken 65",1 , 180, "5/4/2022 (Monday)", 2,),
  createData(3, "Chicken Mughlai", 1, 250, "5/4/2022 (Monday)", 2,),
];

export default function OrderDetails() {

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
                  {row.sr}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <p style={{  display: 'flex',justifyContent: 'end', marginRight: '18rem'}}>Total Orders Completed Amount by TURAB KHAN <span>600</span></p>
      </div>
    </div>
  );
}