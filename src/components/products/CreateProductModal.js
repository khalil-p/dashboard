import * as React from "react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Circles } from "react-loader-spinner";
import CloseIcon from "@mui/icons-material/Close";

import {
  CardActions,
  CardContent,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "./createProductModal.css";
import { adminServices } from "../../services/admin.services";
import { convertIntoBase64 } from "../upload-img/convert";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default function CreateProductModal({ fetchData }) {
  const [categoryList, setCategoryList] = useState([]);
  const [details, setDetails] = useState({
    name: "",
    price: "",
  });
  const [detailsArray, setDetailsArray] = useState([]);
  const initialValues = {
    name: "",
    category: "",
    price: "",
    discount: 0,
    description: "",
    image: "",
    details: [],
  };
  let validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    image: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
    discount: Yup.string().required("Moblie Required"),
  });

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let notify;
  const fetchProductsList = async () => {
    const data = await adminServices.getAllCategories().then((res) => {
      console.log(res.data.categories, "categories ");

      setCategoryList(res.data.categories);
    });
  };
  useEffect(() => {
    fetchProductsList();
  }, []);
  async function handleSubmit(values, { resetForm }) {
    // formData.append("adminid", adminid)
    setLoading(true);
    const data = await adminServices
      .addProduct({
        ...values,
        details: detailsArray.length > 0 ? detailsArray : [],
      })
      .then((res) => {
        console.log("this is status.......", res.status);
        if (res.status === 201 || res.status === 200) {
          notify = () => {
            toast("Product Added Successfully");
            setOpen(false);
            resetForm();
            fetchData();
            setLoading(false);
            setDetailsArray([]);
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
  const addDetailsInArray = () => {
    setDetailsArray([...detailsArray, details]);
    setDetails({ name: "", price: "" });
    setOpenDetails(false);
  };
  console.log(detailsArray);
  return (
    <>
      <div>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Product
        </Button>
        <Modal
          keepMounted
          open={open}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Button
              onClick={handleClose}
              style={{ position: "relative", left: "200px", bottom: "24px" }}
            >
              <CloseIcon />
            </Button>
            {loading && (
              <Circles
                type="Oval"
                color="#00BFFF"
                height={50}
                width={50}
                style={{ marginTop: "5rem" }}
              />
            )}
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {({ dirty, isValid, values, setFieldValue }) => {
                return (
                  <Form>
                    <CardContent>
                      <Grid item container spacing={2}>
                        <Grid item xs={12} sm={12} md={12}>
                          <InputLabel>Product Name</InputLabel>
                          <Field
                            variant="outlined"
                            fullWidth
                            name="name"
                            value={values.name}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                          <div>
                            <InputLabel htmlFor="category">Category</InputLabel>

                            <Select
                              labelId="category"
                              id="category"
                              fullWidth
                              name="category"
                              value={values.category}
                              onChange={(e) =>
                                setFieldValue("category", e.target.value)
                              }
                            >
                              <MenuItem value="">
                                <em>Select Category</em>
                              </MenuItem>
                              {categoryList.map((item) => (
                                <MenuItem value={item.id}>
                                  <img
                                    src={item.image}
                                    style={{ width: "50px", height: "50px" }}
                                  />
                                  {item.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                          <InputLabel htmlFor="description">
                            description
                          </InputLabel>
                          <Field
                            variant="outlined"
                            fullWidth
                            name="description"
                            value={values.description}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <InputLabel>Price</InputLabel>
                          <Field
                            variant="outlined"
                            fullWidth
                            name="price"
                            value={values.price}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                          <InputLabel>Discount</InputLabel>
                          <Field
                            variant="outlined"
                            fullWidth
                            name="discount"
                            type="number"
                            value={values.discount}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <Button
                            size="small"
                            onClick={() => setOpenDetails(true)}
                          >
                            Add Quantity
                          </Button>
                          <List style={{ display: "flex" }}>
                            {detailsArray.length > 0 &&
                              detailsArray.map((item) => (
                                <ListItem>
                                  <ListItemText
                                    primary={item.name}
                                    secondary={item.price}
                                  />
                                </ListItem>
                              ))}
                          </List>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                          <InputLabel htmlFor="image">Image</InputLabel>

                          <input
                            type="file"
                            name="image"
                            onChange={async (e) => {
                              setLoading(true);
                              const base64 = await convertIntoBase64(
                                e.target.files[0]
                              );
                              setLoading(false);

                              console.log(base64);
                              setFieldValue("image", base64);
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Grid item container spacing={1} justifyContent="center">
                        <Button
                          disabled={!dirty || !isValid}
                          variant="contained"
                          color="primary"
                          type="Submit"
                        >
                          Add Product
                        </Button>
                      </Grid>
                    </CardActions>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Modal>

        <Modal
          keepMounted
          open={openDetails}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Button
              onClick={() => setOpenDetails(false)}
              style={{ position: "relative", left: "200px", bottom: "24px" }}
            >
              <CloseIcon />
            </Button>
            <Typography>Add Details</Typography>
            <CardContent>
              <Grid item container spacing={4}>
                <Grid item xs={12} sm={12} md={12}>
                  <InputLabel htmlFor="Quantity">Quantity</InputLabel>
                  {/* <input
                    style={{ width: "100%", height: "30px" }}
                    name="name"
                    onChange={(e) =>
                      setDetails({ ...details, name: e.target.value })
                    }
                    value={details.name}
                    autocomplete="off"
                  /> */}
                  <Select
                    labelId="category"
                    fullWidth
                    placeholder="Select a Quantity"
                    name="category"
                    value={details.name}
                    // onChange={(e) =>
                    //   setDetails({ ...details, name: e.target.value })
                    // }
                    onChange={(e) =>
                      // setFieldValue("category", e.target.value)
                      setDetails({ ...details, name: e.target.value })
                    }
                  >
                    =<MenuItem value={"Half"}>Half </MenuItem>
                    <MenuItem value={"Full"}>Full </MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <InputLabel htmlFor="Price">Price</InputLabel>
                  <input
                    style={{ width: "100%", height: "30px" }}
                    name="price"
                    onChange={(e) =>
                      setDetails({ ...details, price: e.target.value })
                    }
                    value={details.price}
                    autocomplete="off"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid item container spacing={1} justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addDetailsInArray}
                >
                  Add
                </Button>
              </Grid>
            </CardActions>
          </Box>
        </Modal>
      </div>
      <ToastContainer />
    </>
  );
}
