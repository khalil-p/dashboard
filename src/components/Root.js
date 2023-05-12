import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import './dashboard.css'
import { Link } from 'react-router-dom';
function Root() {
    return (
        <>
            <div className="dashboard">
                <SideBar />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Root;