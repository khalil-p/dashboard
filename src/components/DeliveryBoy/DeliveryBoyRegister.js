import React, { useState } from "react";
import "./delivery.css";
import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, InputLabel } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  password: "",
  deviceToken: "e",
}
const DeliveryBoyRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });
  let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    mobile: Yup.string().required("Moblie Required"),

  })
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  let notify;

  const handleSubmit = async (values , { resetForm }) => {
    console.log(values);
    try {
      const response = await axios.post(
        "https://madni-food-app.vercel.app/api/delivery/register",
        values
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
        resetForm()
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
      <Grid container  justifyContent="center">
        <h1 style={{fontSize:'2vw'}}>Delivery Boy Registon</h1>
        {/* <form onSubmit={handleSubmit}>
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
        </form> */}

<Grid container justifyContent="center" spacing={1}>
      <Grid item md={6}>
        <Card >
          <CardHeader title="REGISTER FORM"></CardHeader>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
            {({ dirty, isValid, values }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} >
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                         label=" Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          value={values.firstName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          value={values.lastName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Mobile"
                          variant="outlined"
                          fullWidth
                          name="mobile"
                          value={values.mobile}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Email"
                          variant="outlined"
                          fullWidth
                          name="email"
                          value={values.email}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Password"
                          variant="outlined"
                          fullWidth
                          name="password"
                          value={values.password}
                          type="password"
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions >
                    <Grid item container spacing={1} justifyContent="center">
                    <Button
                      disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                    >
                      REGISTER
                    </Button>
                    </Grid>
                  </CardActions>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default DeliveryBoyRegister;
