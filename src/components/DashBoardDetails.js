import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function DashBoardDetails() {
  return (
    <>
      <div style={{ width: '100px', display: 'flex' }}>
                    <Card sx={{ minWidth: 275, backgroundColor: '#FFEBCD', marginLeft: '3rem' }}>
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
                    <Card sx={{ minWidth: 275, marginLeft: '5rem', backgroundColor: '#FFEBCD' }}>
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
                    <Card sx={{ minWidth: 275, marginLeft: '5rem', backgroundColor: '#FFEBCD' }}>
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
    </>
  )
}

export default DashBoardDetails
