import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { adminServices } from "../services/admin.services";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import KeepMountedModal from "./CreateModal";
import { ToastContainer, toast } from "react-toastify";

export default function CategoryTable() {
  const columns = [
    { field: "srNo", headerName: "Serial No.", width: 90 },
    { field: "name", headerName: "Category Name", width: 300 },
    {
      field: "image",
      headerName: "Image",
      width: 90,
      renderCell: (params) => {
        return <Avatar src={params.value} sx={{ width: 50, height: 50 }} />;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                await deleteCategory(params.id);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
  const [jsonData, setJsonData] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProductsList = async () => {
    const data = await adminServices.getAllCategories().then((res) => {
      console.log(res.data.categories);
      const row1 = res.data.categories.map((item, index) => {
        return { srNo: index + 1, ...res.data.categories[index] };
      });
      setJsonData(res.data.categories);
      setRows(row1);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    fetchProductsList();
  }, []);
  const deleteCategory = async (id) => {
    try {
      await adminServices.deleteCategory(id);
      toast("Successfully Delete");
      fetchProductsList();
    } catch (error) {
      toast(error);
    }
  };
  if (isLoading)
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

  return (
    <>
      <div
        className="addCategoryDiv"
        style={{
          textAlign: "right",
          marginBottom: "1rem",
          marginRight: "1.4rem",
        }}
      >
        <div className="addCategoryButton">
          <KeepMountedModal />
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
      <ToastContainer />
    </>
  );
}
