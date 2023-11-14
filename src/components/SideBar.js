import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import { adminServices } from "../services/admin.services";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <Link to="/dashBoard">
        <p>
          <DashboardIcon />
          Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products" className="products">
            <Link
              onClick={adminServices.getAllProducts}
              to="dashBoard/productList"
            >
              <TreeItem
                nodeId="2"
                label="All Products"
                icon={<PostAddIcon />}
              />
            </Link>
            <Link
              onClick={adminServices.getAllCategories}
              to="/dashBoard/categoryList"
            >
              <TreeItem nodeId="3" label="Category" icon={<PostAddIcon />} />
            </Link>
            {/* <TreeView
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ImportExportIcon />}
            >
              <TreeItem nodeId="4" label="Create" className="create">
                <Link to="">
                  <TreeItem nodeId="5" label="Add Product" icon={<AddIcon />} />
                </Link>
                <Link to="">
                  <TreeItem
                    nodeId="6"
                    label="Add Category"
                    icon={<AddIcon />}
                  />
                </Link>
              </TreeItem>
            </TreeView> */}
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="dashBoard/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="dashBoard/OrderHistory">
        <p>
          <ListAltIcon />
        Daily Order History
        </p>
      </Link>

      <Link>
      
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Delivery Boy" className="delivery">
            <Link
              // onClick={adminServices.deliveryBoyRegister}
              to="dashBoard/deliveryBoyRegister"
            >
              <TreeItem nodeId="2" label="Register" icon={<PostAddIcon />} />
            </Link>
            <Link
              // onClick={adminServices.deliveryBoyRegister}
              to="dashBoard/deliveryBoyList"
            >
              <TreeItem
                nodeId="3"
                label="Delivery Boy List"
                icon={<PostAddIcon />}
              />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link
        to="/login"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        <p>
          <LogoutIcon />
          Logout
        </p>
      </Link>
      <Link
        to="https://prabhavatids.com/"
        target="_blank"
    
      >
     <img src={require('../assets/PBN.png')} style={{width:'150px'}}/>
     <p>+919420114282</p>
      </Link>

    </div>
  );
}

export default SideBar;
