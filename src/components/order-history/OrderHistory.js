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

// function createData(sr, name, calories, fat, carbs, protein, last) {
//   return { sr, name, calories, fat, carbs, protein, last };
// }

// const rows = [
//   createData(1, "Laiq", "5/4/2022", 5, 4, 2, true),
//   createData(2, "Rizwan", "5/4/2022", 5, 4, 2,<h3>Order Details</h3>),
//   createData(3, "Ayan", "5/4/2022", 5, 4, 2,<h3>Order Details</h3>),
// ];

export default function OrderHistory() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // /api/getOrderDailyLis
  const fetchProductsList = async () => {
    const data = await adminServices.dailyOrderList().then((res) => {
      const row1 = res.data.data.map((item, index) => {
        return { id: index + 1, ...item };
      });

      setRows(row1);
    });
  };
  useEffect(() => {
    fetchProductsList();
    setIsLoading(false);
  }, []);
  const currentDate = new Date();

  // Format the date
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
  };
  const formattedDate = currentDate.toLocaleDateString("en-GB", options);

  console.log(formattedDate);

  return (
    <>
      <h1> MADANI RESTAURANT DAILY COD BILLING</h1>
      <h3>Date:{formattedDate}</h3>
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
                  {row.id}
                </TableCell>
                <TableCell align="center">{row?._id?.deliveryBoy}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.acceptedCount}</TableCell>
                <TableCell align="center">{row.cancelledCount}</TableCell>
                <TableCell align="center">{row.completedCount}</TableCell>
                <button
                  onClick={() =>
                    navigate(`/dashBoard/OrderDetails/${row._id?.id}`)
                  }
                >
                  Order Details
                </button>{" "}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
