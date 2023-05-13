import React from 'react'
import "./sidebar.css"
import adminLogo from '../assets/admin.png'
// import mainPage from '../assets/home.png'
import { Link } from 'react-router-dom';
import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import RateReview from '@mui/icons-material/RateReview'
import { adminServices } from '../services/admin.services'

function SideBar() {
    return (
        <div className='sidebar'>
            {/* <Link to='/'>
                <img src={mainPage} alt="" />
            </Link> */}
            <Link to='/'>
                {/* <img src={adminLogo} alt="" /> */}
                <p><DashboardIcon />Dashboard</p>
            </Link>
            <Link>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ImportExportIcon />}
                >
                    <TreeItem nodeId='1' label='Products' className='products'>
                        <Link onClick={adminServices.getAllProducts} to='dashBoard/productList'>
                            <TreeItem nodeId='2' label='All Products' icon={<PostAddIcon />} />
                        </Link>
                        <Link onClick={adminServices.getAllCategories} to='/dashBoard/categoryList' >
                            <TreeItem nodeId='3' label='Category' icon={<PostAddIcon />} />
                        </Link>
                        <TreeView
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ImportExportIcon />}>
                            <TreeItem nodeId='4' label='Create' className='create'>
                                <Link to=''>
                                    <TreeItem nodeId='5' label='Add Product' icon={<AddIcon />} />
                                </Link>
                                <Link to=''>
                                    <TreeItem nodeId='6' label='Add Category' icon={<AddIcon />} />
                                </Link>
                            </TreeItem>
                        </TreeView>
                    </TreeItem>
                </TreeView>
            </Link>
            <Link to='/admin/orders'>
                <p>
                    <ListAltIcon />
                    Orders
                </p>
            </Link>
            <Link to='/admin/users'>
                <p>
                    <PeopleIcon />
                    Users
                </p>
            </Link>
            <Link to='/admin/Reviews'>
                <p>
                    <PeopleIcon />
                    Reviews
                </p>
            </Link>


        </div>
    )
}

export default SideBar