import React, { useEffect } from 'react'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CategoryTable from './CategoryTable'
import { adminServices } from '../services/admin.services'
import { Outlet } from 'react-router-dom'
function Dashboard() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login')
        }

    }, []);
    return (
        <div className='dashboard'>
            <SideBar />
            <div style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.13)', paddingLeft: '1rem', paddingTop: '5rem', paddingRight: '1rem' }}>
                <h1>DASHBOARD</h1>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard