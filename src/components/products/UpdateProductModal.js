import * as React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input, InputLabel, TextField } from "@mui/material";
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

export default function UpdateProductModal({ open, setOpen, formValues }) {
  const [name, setName] = useState(formValues.name);
  const [category, setCategory] = useState(formValues.category);
  const [price, setPrice] = useState(formValues.price);
  const [discount, setDiscount] = useState(formValues.discount);
  const [description, setDescription] = useState(formValues.description);
  const [img, setImg] = useState(formValues.image);
  // const [adminid, setAdminId] = useState('6416bb61115dc8d869fde3e1')
  // const [tostMessage, setTostMessage] = useState('')
  const [response, setResponse] = useState(null);
//   const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  let notify;

  async function getFormData(e) {
    e.preventDefault();

    const payload = {
      name: name,
      category: category,
      price: price,
      discount: discount,
      description: description,
      image: img,
      productId: formValues._id,
    };
    const data = await adminServices
      .updateProduct(payload)
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
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Update Product Details
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
                value={name}
                vatiant=" outlined"
                placeholder=""
              />
            </div>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <InputLabel htmlFor="category">Category</InputLabel>
              <TextField
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
                id="category"
                vatiant=" outlined"
                placeholder=""
              />
            </div>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <InputLabel htmlFor="price">Price</InputLabel>
              <TextField
                onChange={(e) => setPrice(e.target.value)}
                required
                id="price"
                vatiant=" outlined"
                value={price}
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
                value={discount}
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
                value={description}
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
      <ToastContainer />
    </>
  );
}
