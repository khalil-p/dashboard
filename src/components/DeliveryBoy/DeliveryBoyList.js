import React, { useState, useEffect } from 'react'
import { adminServices } from '../../services/admin.services'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'id', headerName: 'Sr.No.', width: 60 },
    { field: 'firstName', headerName: 'First Name', width: 100 },
    { field: 'lastName', headerName: 'Last Name', width: 100 },
    { field: 'mobile', headerName: 'Contact No', width: 120 },
    { field: 'email', headerName: 'Email', width: 200 },
];

export default function DeliveryBoyList() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/dashBoard/deliveryBoyList')
        }
    }, [])


    const [deliveryBoys, setDeliveryBoys] = useState([]);
    const [rows, setRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProductsList = async () => {
            const data = await adminServices.deliveryBoyList().then((res) => {
                console.log(res.data);
                console.log(res.data);
                const row1 = res.data.map((item, index) => {
                    return { id: index + 1, ...res.data[index] };
                });
                setDeliveryBoys(res.data);
                setRows(row1);
            });
        };
        fetchProductsList();
        setIsLoading(false)
    }, []);

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

// const DeliveryBoyList = () => {

//   const [deliveryBoys, setDeliveryBoys] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const fetchDeliveryBoys = async () => {
//     setIsLoading(true)
//     const data = await adminServices.deliveryBoyList().then((response) => {
//         console.log(response.data);
//         setDeliveryBoys(response.data)
//         setIsLoading(false)
//       })
//       .catch((error) => {
//         console.error('Error fetching delivery boys:', error)
//         setIsLoading(false)
//       })
//   }
//   useEffect(() => {
//       fetchDeliveryBoys()
// }, []);

//   return (
//     <>
//     <h1>List of APIs</h1>
//     </>
//   )
// }

// export default DeliveryBoyList
