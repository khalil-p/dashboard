import React from 'react'
import './dashboard.css'
import SideBar from './SideBar'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CategoryTable from './CategoryTable'
import { adminServices } from '../services/admin.services'
function DashboardContainer() {
    // { adminServices.getAllProducts() }


    return (
        <div>
            <div className='dashboardContainer'>
                <Typography component='h1'>Dashboard</Typography >

            </div>
        </div>
    )
}

export default DashboardContainer