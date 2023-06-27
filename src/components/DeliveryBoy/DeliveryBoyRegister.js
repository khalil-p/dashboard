import React, { useState } from 'react';
import './delivery.css'
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const DeliveryBoyRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    deviceToken: 'eZ8HqKz3Qm-r9qGd-v-oD7:APA91bHUdB8aYmlPXKoET6hr10MqwUZoftaoMTnRSg-bP-mdNEhROPv3oYgTkItElN47ziXOyjhWRxdYd-VO9yTrdQeTQCNx4Jrp24dojkaa3_CfvCv2cOo3gzBcMPCcmVq2BrV8PxsD',
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
        'https://fooddeliveryapp.onrender.com/api/delivery/register',
        formData
      );
      // if(response.data.data.status===200 || response.data.data.status===201){
      //   alert('Delivery Boy Registration Successful')
      // }
      if (response.data.data.status === 200 || response.data.data.status === 201) {
        notify = () => { toast("DeliveryBoy Added Successfully") }
        notify()
      } else {
        console.log('something went wrong')
      }
      console.log(response.data); // handle success response
    } catch (error) {
      console.log(error.response.data.message); // handle error response
      notify = () => { toast("An Error Occured") }
      notify()
    }
  };

  return (
    <>
    <Container maxWidth="sm">
      <h1>Delivery Boy Registration</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
        />
        <TextField
          name="mobile"
          label="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          fullWidth
          required
          type="tel"
        />
        <TextField
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          type="password"
        />
        <TextField
          name="deviceToken"
          label="Device Token"
          value={formData.deviceToken}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>
    </Container>
    <ToastContainer />
    </>
  );
};

export default DeliveryBoyRegister;
