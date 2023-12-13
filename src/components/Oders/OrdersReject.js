import * as React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { adminServices } from '../../services/admin.services';
import { Avatar } from '@mui/material';
const columns = [
    { field: 'id', headerName: 'Sr.No.', width: 60 },
    { field: 'name', headerName: 'Order Name', width: 210 },
    { field: 'address', headerName: 'Address', width: 200 },
    {
        field: 'image', headerName: 'Image', width: 90,
        renderCell: (params) => {
            return <Avatar src={params.value} sx={{ width: 50, height: 50 }} />
        }
    },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'noOfCartItems', headerName: 'Number of Items', width: 120 },
];

export default function OrdersReject() {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     if (!localStorage.getItem("token")) {
    //         navigate('/login')
    //     }
    // }, [])


    const [jsonData, setJsonData] = useState([]);
    const [rows, setRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProductsList = async () => {
            const data = await adminServices.pendingOrderList("Rejected").then((res) => {
                console.log(res);
                const row1 = res.data.data.orders.map((item, index) => {
                    return { id: index + 1, ...res.data.data.orders[index] };
                });
                setJsonData(res.data.data.orders);
                setRows(row1);
            });
        };
        fetchProductsList();
        setIsLoading(false)
    }, []);

    // console.log("The data in rows", rows);
    // console.log("The data in jsonData", jsonData);

    if (isLoading) {
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Loadin......</div>
    } else {
        return (
            <>
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
