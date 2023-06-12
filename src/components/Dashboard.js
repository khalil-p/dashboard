import React from 'react'
import './dashboard.css'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
                <div style={{width:'100px',display:'flex'}}>
                    <Card sx={{ minWidth: 275,backgroundColor:'#FFEBCD',marginLeft:'3rem' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Total Numbers of Users
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h4">
                                00.00
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 275,marginLeft:'5rem',backgroundColor: '#FFEBCD' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Total Numbers of Workers
                            </Typography>
                            <br />
                            <Typography variant="h4">
                                00.00
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 275,marginLeft:'5rem',backgroundColor: '#FFEBCD' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Total Numbers of sell
                            </Typography>
                            <br />
                            <br />
                            <Typography variant="h4">
                                00.00
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
// sx={{ minWidth: 275 }}