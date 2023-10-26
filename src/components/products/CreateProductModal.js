import * as React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import "./createProductModal.css";
import { adminServices } from "../../services/admin.services";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default function CreateProductModal() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("6423277c8093130c17b374e3");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const [response, setResponse] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let notify;
  const fetchProductsList = async () => {
    const data = await adminServices.getAllCategories().then((res) => {
      console.log(res.data.categories ,'categories ');
    
      setCategoryList(res.data.categories)
    });
  };
  useEffect(() => {
    fetchProductsList();
  }, []);
  async function getFormData(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("description", description);
    formData.append("image", img);
    // formData.append("adminid", adminid)
    console.log(formData);
    const data = await adminServices
      .addProduct(formData)
      .then((res) => {
        setResponse(res);
        console.log("this is status.......", res.status);
        if (res.status === 201 || res.status === 200) {
          notify = () => {
            toast("Product Added Successfully");
          };
          notify();
        } else {
          console.log("something went wrong");
        }
      })
      .catch((error) => {
        console.log("this is an error....", error);
        notify = () => {
          toast("An Error Occured");
        };
        notify();
      });
  }

  return (
    <>
      <div> 
        <Button onClick={handleOpen}>Add Product</Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box
            component="form"
            onSubmit={getFormData}
            Validate
            autoComplete="off"
            sx={style}
          >
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              Enter Product Details
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <InputLabel htmlFor="name">Product Name</InputLabel>
                <TextField
                  style={{ padding: "0.2rem" }}
                  onChange={(e) => setName(e.target.value)}
                  required
                  id="name"
                  vatiant=" outlined"
                  placeholder=""
                />
              </div>
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <InputLabel htmlFor="category">Category</InputLabel>
            
                  <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="Age"
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="">
          <em>Select Category</em>
        </MenuItem>
        {categoryList.map((item)=>(
 <MenuItem value={item.id}> <img src={item.image} style={{width:'50px' ,height:"50px"}}/>{item.name}</MenuItem>
        ))

        }
       
  
      </Select>
              </div>
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <InputLabel htmlFor="price">Price</InputLabel>
                <TextField
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  id="price"
                  vatiant=" outlined"
                  placeholder=""
                />
              </div>
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <InputLabel htmlFor="discount">Discount</InputLabel>
                <TextField
                  onChange={(e) => setDiscount(e.target.value)}
                  required
                  id="discount"
                  vatiant=" outlined"
                  placeholder=""
                />
              </div>
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <InputLabel htmlFor="description">Description</InputLabel>
                <TextField
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  id="description"
                  vatiant=" outlined"
                  placeholder=""
                />
              </div>
              <Button
                className="imageUpload"
                variant="contained"
                component="label"
              >
                Upload File
                <Input
                  className="imgInput"
                  onChange={(e) => setImg(e.target.files[0])}
                  type="file"
                  hidden
                  required
                />
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ margin: "2rem" }}
              >
                ADD
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
}
