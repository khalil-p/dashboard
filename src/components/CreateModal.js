import * as React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Input, InputLabel, TextField } from "@mui/material";
import "./createModal.css";
import { adminServices } from "../services/admin.services";
import { convertIntoBase64 } from "./upload-img/convert";
import CloseIcon from "@mui/icons-material/Close";

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

export default function KeepMountedModal({ fetchProductsList }) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [valueImage, setValueImage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setImg("");
    setName("");
    setValueImage("");
  };

  const onUpload = async (e) => {
    console.log(e);
    const base64 = await convertIntoBase64(e.target.files[0]);
    setValueImage(e.target.files[0]);
    setImg(base64);
  };
  let notify;

  async function getFormData(e) {
    e.preventDefault();

    const payload = {
      name: name,
      image: img,
    };

    const data = await adminServices
      .addCategory(payload)
      .then((res) => {
        console.log("this is status.......", res.status);
        if (res.status === 201 || res.status === 200) {
          notify = () => {
            toast("Category Added Successfully");
          };
          notify();
          setImg("");
          setName("");
          setValueImage("");
          fetchProductsList();
          setOpen(false);
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
        <Button onClick={handleOpen} variant="contained" color="primary">
          Add Category
        </Button>
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
            <Button
              onClick={handleClose}
              style={{ position: "relative", left: "200px", bottom: "24px" }}
            >
              <CloseIcon />
            </Button>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              Enter Category Details
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
                <InputLabel htmlFor="name">Category Name</InputLabel>
                <TextField
                  style={{ padding: "0.2rem" }}
                  onChange={(e) => setName(e.target.value)}
                  required
                  id="adminid"
                  value={name}
                  vatiant=" outlined"
                  placeholder=""
                />
              </div>

              <Button
                className="imageUpload"
                variant="contained"
                component="label"
              >
                Upload
                <Input
                  className="imgInput"
                  onChange={onUpload}
                  type="file"
                  hidden
                  value={valueImage}
                />
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ margin: "2rem" }}
                disabled={name === "" || img === ""}
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
