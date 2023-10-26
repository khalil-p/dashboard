import React, { useState } from "react";
import "./delivery.css";
import { TextField, Button, Container, Grid } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const DeliveryBoyRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    deviceToken: "e",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  let notify;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://madni-food-app.vercel.app/api/delivery/register",
        formData
      );
      // if(response.data.data.status===200 || response.data.data.status===201){
      //   alert('Delivery Boy Registration Successful')
      // }
      if (
        response.data.data.status === 200 ||
        response.data.data.status === 201
      ) {
        notify = () => {
          toast("DeliveryBoy Added Successfully");
        };
        notify();
      } else {
        console.log("something went wrong");
      }
      console.log(response.data); // handle success response
    } catch (error) {
      console.log(error.response.data.message); // handle error response
      notify = () => {
        toast("An Error Occured");
      };
      notify();
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <h1>Delivery Boy Registration</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="First Name"
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="mobile"
                label="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                fullWidth
                required
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                type="text"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name="deviceToken"
                label="Device Token"
                value={formData.deviceToken}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
            </Grid >
          </Grid>
        </form>
      </Container>
      <ToastContainer />
    </>
  );
};

export default DeliveryBoyRegister;
