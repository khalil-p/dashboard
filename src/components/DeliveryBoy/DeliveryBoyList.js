import React, { useState, useEffect } from "react";
import { adminServices } from "../../services/admin.services";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

export default function DeliveryBoyList() {
  const columns = [
    { field: "id", headerName: "Sr.No.", width: 60 },
    { field: "firstName", headerName: "First Name", width: 100 },
    { field: "lastName", headerName: "Last Name", width: 100 },
    { field: "mobile", headerName: "Contact No", width: 120 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                await deleteDelevryBoy(params.row._id);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/dashBoard/deliveryBoyList");
    }
  }, []);

  const [deliveryBoys, setDeliveryBoys] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProductsList = async () => {
    const data = await adminServices.deliveryBoyList().then((res) => {
      const row1 = res.data.map((item, index) => {
        return { id: index + 1, ...res.data[index] };
      });
      setDeliveryBoys(res.data);
      setRows(row1);
    });
  };
  // /api/admin/removeBoy
  useEffect(() => {
    fetchProductsList();
    setIsLoading(false);
  }, []);

  const deleteDelevryBoy = async (id) => {
    try {
      await adminServices.deleteDelevryBoy(id);
      toast("Successfully Delete");
      fetchProductsList();
    } catch (error) {
      toast(error);
    }
  };
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loadin......
      </div>
    );
  } else {
    return (
      <>
        <div style={{ height: "67vh", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
        <ToastContainer />
      </>
    );
  }
}

