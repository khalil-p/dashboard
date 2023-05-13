import * as React from 'react';
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { adminServices } from '../../services/admin.services';
import { Avatar } from '@mui/material';

const columns = [
    { field: 'id', headerName: 'Sr.No.', width: 60 },
    { field: 'name', headerName: 'Product Name', width: 210 },
    { field: 'description', headerName: 'Product Description', width: 250 },
    {
        field: 'image', headerName: 'Image', width: 90,
        renderCell: (params) => {
            console.log(params.value);
            return <Avatar src={params.value} sx={{ width: 50, height: 50 }} />
        }
    },
    { field: 'discount', headerName: 'Discount', width: 90 },
    { field: 'price', headerName: 'Price', width: 70 },
];

export default function ProductTable() {
    const [jsonData, setJsonData] = useState([]);
    const [rows, setRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProductsList = async () => {
            const data = await adminServices.getAllProducts().then((res) => {
                console.log(res.data.Products);
                const row1 = res.data.Products.map((item, index) => {
                    return { id: index + 1, ...res.data.Products[index] };
                });
                setJsonData(res.data.Products);
                setRows(row1);
            });
        };
        fetchProductsList();
        setIsLoading(false)
    }, []);

    console.log("The data in rows", rows);
    console.log("The data in jsonData", jsonData);

    if (isLoading) {
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Loadin......</div>
    } else {
        return (
            <>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
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