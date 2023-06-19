import React from 'react'
import './dashboard.css'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

function Dashboard() {
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
// sx={{ minWidth: 275 }}