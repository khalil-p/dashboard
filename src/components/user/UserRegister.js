import React, { useState } from "react";
import "./delivery.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Grid,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  description: "",
  deviceToken: "e",
};
const UserRegister = () => {
  let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    description: Yup.string().required("Required"),
    mobile: Yup.string().required("Moblie Required"),
  });

  let notify;

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);
    try {
      const response = await axios.post(
        "https://madni-food-app.vercel.app/api/deleteRequest",
        values
      );
      // if(response.data.data.status===200 || response.data.data.status===201){
      //   alert('Delivery Boy Registration Successful')
      // }
      console.log(response);
      if (response.data.status === 200 || response.data.data.status === 201) {
        notify = () => {
          toast("Your Request Has been Sent For Verification ");
        };
        notify();
        resetForm();
      } else {
        console.log("something went wrong");
      }
      console.log(response.data); // handle success response
    } catch (error) {
      console.log(error.response.data.data.message); // handle error response
      notify = () => {
        toast(error.response.data.data.message);
      };
      notify();
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <h1 style={{ fontSize: "2vw" }}>Application For Deleting user</h1>

        <Grid container justifyContent="center" spacing={1}>
          <Grid item md={6}>
            <Card>
              <CardHeader title="Application FORM"></CardHeader>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
              >
                {({ dirty, isValid, values }) => {
                  return (
                    <Form>
                      <CardContent>
                        <Grid item container spacing={4}>
                          <Grid item xs={12} sm={12} md={12}>
                            <InputLabel htmlFor="Name">Name</InputLabel>

                            <Field
                              variant="outlined"
                              fullWidth
                              name="firstName"
                              value={values.firstName}
                              component={TextField}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <InputLabel htmlFor="Last Name">
                              Last Name
                            </InputLabel>
                            <Field
                              variant="outlined"
                              fullWidth
                              name="lastName"
                              value={values.lastName}
                              component={TextField}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6} md={6}>
                            <InputLabel htmlFor="Mobile">Mobile</InputLabel>

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
                          <InputLabel htmlFor="email">Email</InputLabel>
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
                          <InputLabel htmlFor="description">Description</InputLabel>

                            <Field
                              label="description"
                              variant="outlined"
                              fullWidth
                              name="description"
                              value={values.description}
                              component={TextField}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                      <CardActions>
                        <Grid
                          item
                          container
                          spacing={1}
                          justifyContent="center"
                        >
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
                  );
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

export default UserRegister;
