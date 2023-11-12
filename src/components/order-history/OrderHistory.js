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
  const [jsonData, setJsonData] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();
    // /api/getOrderDailyLis
    const fetchProductsList = async () => {
      const data = await adminServices.dailyOrderList().then((res) => {
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
                  {row.id}
                </TableCell>
                <TableCell align="center">{row?._id?.deliveryBoy}</TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.acceptedCount}</TableCell>
                <TableCell align="center">{row.cancelledCount}</TableCell>
                <TableCell align="center">{row.completedCount}</TableCell>
                <TableCell align="center"> <button onClick={()=> navigate('/dashBoard/OrderDetails')}>Order Details</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
