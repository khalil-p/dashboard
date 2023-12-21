import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { adminServices } from "../../services/admin.services";
import { Avatar, Button } from "@mui/material";
import CreateProductModal from "./CreateProductModal";
import UpdateProductModal from "./UpdateProductModal";
import { toast } from "react-toastify";

export default function ProductTable() {
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState(null);
  const columns = [
    { field: "id", headerName: "Sr.No.", width: 60 },
    { field: "name", headerName: "Product Name", width: 210 },
    { field: "description", headerName: "Product Description", width: 250 },
    {
      field: "category",
      headerName: "Category",
      width: 250,
      renderCell: (params) => {
        console.log(params);
        return params?.value?.name;
      },
    },
    {
      field: "image",
      headerName: "Image",
      width: 90,
      renderCell: (params) => {
        return <Avatar src={params.value} sx={{ width: 50, height: 50 }} />;
      },
    },
    { field: "discount", headerName: "Discount", width: 90 },
    { field: "price", headerName: "Price", width: 70 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setOpen(true);
                setSelectedValues(params.row);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={async () => {
                await deleteCategory(params.row._id);
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
      navigate("/login");
    }
  }, []);

  const [jsonData, setJsonData] = useState([]);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProductsList = async () => {
    const data = await adminServices.getAllProducts().then((res) => {
      const row1 = res.data.Products.map((item, index) => {
        return { id: index + 1, ...res.data.Products[index] };
      });
      setJsonData(res.data.Products);
      setRows(row1);
    });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchProductsList();
  }, []);
  const deleteCategory = async (id) => {
    try {
      await adminServices.deleteProduct(id);
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
        {selectedValues && (
          <UpdateProductModal
            open={open}
            setOpen={setOpen}
            formValues={selectedValues}
            setSelectedValues={setSelectedValues}
            fetchData={fetchProductsList}
          />
        )}
        <CreateProductModal fetchData={fetchProductsList} />
        <div style={{ height: "68vh", width: '100%' }}>
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
      </>
    );
  }
}

// ..............................

// import * as React from 'react';
// import { useEffect, useState } from 'react'
// import { DataGrid } from '@mui/x-data-grid';
// import { adminServices } from '../../services/admin.services';

// const columns = [
//     { field: 'id', headerName: 'Sr.No.', width: 60 },
//     { field: 'name', headerName: 'Product Name', width: 210 },
//     { field: 'description', headerName: 'Product Description', width: 250 },
//     { field: 'image', headerName: 'Image', width: 90 },
//     { field: 'discount', headerName: 'Discount', width: 90 },
//     { field: 'price', headerName: 'Price', width: 70 },
// ];

// export default function ProductTable() {
//     const [jsonData, setJsonData] = useState([])
//     const [rows, setRows] = useState([])

//     useEffect(() => {
//         const fetchProductsList = async () => {
//             const data = await adminServices.getAllProducts().then((res) => {
//                 console.log(res.data.Products)
//                 setJsonData(res.data.Products)
//             })
//         }
//         fetchProductsList()
//         datamapping()
//     }, []);

//     const datamapping = async () => {
//         await function mapping() {
//             const row1 = jsonData.map((item, index) => {
//                 return { id: index + 1, ...jsonData[index] }

//             })
//             setRows(row1)
//         }
//     }

//     console.log("The data in rows", rows)
//     console.log("The data in jsonData", jsonData)
//     return (
//         <>

//             <div style={{ height: 400, width: '100%' }}>
//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     initialState={{
//                         pagination: {
//                             paginationModel: { page: 0, pageSize: 5 },
//                         },
//                     }}
//                     pageSizeOptions={[5, 10]}
//                     checkboxSelection
//                 />
//             </div>
//         </>)

// }
