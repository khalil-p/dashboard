import * as React from 'react';
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
// const img = require('../assets/google.png')


export default function CategoryTable() {
    const [stopLoop, setStopLoop] = useState(true)
    const [categoryList, setCategoryList] = useState([])
    const [categoryKeys, setCategoryKeys] = useState([])
    const [categoryValues, setCategoryValues] = useState([])

    const fetchCategoryData = async () => {
        const categoryData = await adminServices.getAllCategories().then((res) => {
            // console.log("this is from fetch data", res.data.categories)
            setCategoryList(res.data.categories)
        })
    }


    useEffect(() => {
        fetchCategoryData()
        setStopLoop(false)
    }, [stopLoop === true]);

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
            {
                (categoryList === null || undefined) ?? <TableContainer component={Paper}>
                    {/* {console.log("this is categoryList", categoryList)}
                    {console.log("categories keys", categoryKeys)} */}
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {categoryKeys.map((item) => {
                                    return (
                                        <TableCell style={{ textTransform: 'capitalize', textAlign: 'left' }}>{item}</TableCell>
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
                                                        Url ? <TableCell><Avatar alt="Img" src={item} /></TableCell> : <TableCell align="left">{item}</TableCell>
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
        </div >
    );
}