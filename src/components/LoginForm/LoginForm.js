import React, { useEffect, useState } from 'react'
import './LoginForm.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { adminServices } from '../../services/admin.services'
import { useNavigate } from 'react-router-dom'
function LoginForm() {
  const [inputFiled, setInputFiled] = useState({
    mobile: '', password: ''
  })
  let navigate = useNavigate();
  const handleOnchange = (event) => {
    setInputFiled((prve) => {
      let helper = { ...prve }
      helper[event.target.name] = event.target.value
      return helper
    })
  }
  const handleOnClick = async () => {
    const data = await adminServices.loginAPICall(inputFiled).then((res) => {
      console.log("this is response", res)
      console.log(res.data.data.data)
      console.log(res.data.data.data.email)
      console.log("token", res.data.data.data.token)
      localStorage.setItem("token", JSON.stringify(res.data.data.data.token))
      if (localStorage.getItem("token") !== undefined) {
        navigate('/')
        alert('Login Successful');
        // toast.success("Login Successful");
      } else {
        alert('Login UnSuccessful');
        // toast.success("Login UnSuccessful");
      }
    })
    console.log(inputFiled);
  }
  return (
    <div>
      <h2 className='main-hading'>LOGIN</h2>
      <div className='main-containt'>
        <input type='number' name='mobile' className='input1' placeholder='mobile' onChange={handleOnchange} value={inputFiled.mobile} />
        <input type='password' name='password' className='input2' placeholder='Password' onChange={handleOnchange} value={inputFiled.password} />
        <button className='login-buton' onClick={handleOnClick}>login</button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default LoginForm
