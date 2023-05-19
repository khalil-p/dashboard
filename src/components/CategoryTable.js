// {
//     "mobile":"8626014623",
//     "password":"admin123@"
// }
// {{devUrl}}/api/admin/login

import * as React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { adminServices } from '../services/admin.services';
import { Avatar } from '@mui/material';
import { Button } from '@material-ui/core';
import KeepMountedModal from './CreateModal';
const columns = [
    { field: 'srNo', headerName: 'Serial No.', width: 90 },
    { field: 'name', headerName: 'Category Name', width: 300 },
    {
        field: 'image', headerName: 'Image', width: 90,
        renderCell: (params) => {
            return <Avatar src={params.value} sx={{ width: 50, height: 50 }} />
        }
    },
    {
        field: 'action', headerName: 'Action', width: 200,
        renderCell: (params) => {
            const handleOnClick = ()=>{
                console.log(columns);
            }
             return (
                <div>
                    <Button variant="contained" color="primary" style={{ marginRight: '10px' }} >
                        Edit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleOnClick} >
                        Delete
                    </Button>
                </div>
            )
        }
    },


];

export default function CategoryTable() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login')
        }
    }, [])
    const [jsonData, setJsonData] = useState([]);
    const [rows, setRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProductsList = async () => {
            const data = await adminServices.getAllCategories().then((res) => {
                console.log(res.data.categories);
                const row1 = res.data.categories.map((item, index) => {
                    return { srNo: index + 1, ...res.data.categories[index] };
                });
                setJsonData(res.data.categories);
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
                <div className='addCategoryDiv' style={{ textAlign: 'right', marginBottom: '1rem', marginRight: '1.4rem' }}>
                    <div className='addCategoryButton'>
                        <  KeepMountedModal />
                    </div>
                </div>
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



/*

import * as React from 'react';
import PgNation from './pagination/PgNation';
import loader from '../assets/loader.gif'
import { adminServices } from '../services/admin.services'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import './categoryTable.css'
import './dashboard.css'
import { useState, useEffect } from 'react'
import KeepMountedModal from './CreateModal';
import { Box, Container, CssBaseline } from '@mui/material';

export default function CategoryTable() {
    const [stopLoop, setStopLoop] = useState(true)
    const [categoryList, setCategoryList] = useState([])
    const [categoryKeys, setCategoryKeys] = useState([])
    const [categoryValues, setCategoryValues] = useState([])
    const [gotPage, setGotPage] = useState(1)
    function getPage(page) {
        setGotPage(page)
        console.log("this ihqahdioshfkshfgs", page)
    }
    const fetchCategoryData = async () => {
        const categoryData = await adminServices.getAllCategories(gotPage).then((res) => {
            setCategoryList(res.data.categories)
        })
    }

    useEffect(() => {
        fetchCategoryData()
        setStopLoop(false)
    }, [stopLoop === true, gotPage]);

    useEffect(() => {
        const keys = [...new Set(categoryList.flatMap(item => Object.keys(item)))]
        const values = categoryList.map(item => Object.values(item));
        setCategoryKeys(keys)
        setCategoryValues(values)
    }, [categoryList])

    const isUrl = (str) => {
        const pattern = /^(https?:\/\/)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/i;
        return pattern.test(str);
    }


    return (
        < div>
            <div className='addCategoryDiv' style={{ textAlign: 'right', marginBottom: '1rem', marginRight: '1.4rem' }}>
                <div className='addCategoryButton'>
                    <  KeepMountedModal />
                </div>

            </div>
            <CssBaseline />
            <Container component={Box}>

                {
                    (categoryList === null || undefined) ?? <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    {categoryKeys.map((item) => {
                                        return (
                                            <>
                                                <TableCell style={{ textTransform: 'capitalize', textAlign: 'left' }}>{item === "id" ? "Sr. No" : item}</TableCell>

                                            </>
                                        )
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categoryValues.map((row) => {
                                    return (
                                        <TableRow
                                            key={row.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            {row.map((item) => {
                                                let Url = isUrl(item)
                                                return (
                                                    <>
                                                        {
                                                            Url ? <TableCell><Avatar alt="Img" src={item} /></TableCell> : <TableCell align="left">{item.length == 24 ? (categoryValues.indexOf(row) + 1) : item}</TableCell>
                                                        }

                                                    </>
                                                )
                                            })}
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </Container>
            <PgNation getPage={getPage} />
        </div >
    );
}
*/