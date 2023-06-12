import React, { useState } from 'react'
import './LoginForm.css'
import 'react-toastify/dist/ReactToastify.css';
import { adminServices } from '../../services/admin.services'
import { useNavigate } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'
function LoginForm() {
  const [inputFiled, setInputFiled] = useState({
    mobile: '', password: ''
  })
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();
  const handleOnchange = (event) => {
    setInputFiled((prve) => {
      let helper = { ...prve }
      helper[event.target.name] = event.target.value
      return helper
    })
  }
  const handleOnClick = async () => {
    setLoading(true)
    const data = await adminServices.loginAPICall(inputFiled).then((res) => {
      console.log("this is response", res)
      console.log(res.data.data.data)
      console.log(res.data.data.data.email)
      console.log("token", res.data.data.data.token)
      localStorage.setItem("token", JSON.stringify(res.data.data.data.token))
      if (localStorage.getItem("token") !== undefined) {
        navigate('/')
      } else {
        alert('Login UnSuccessful');
      }
    })
    setLoading(false);
    console.log(inputFiled);
  }
  return (
    <>
      <div className='loginMainDiv'>
        {loading ? (<Circles type='Oval' color='#00BFFF' height={50} width={50} style={{ marginTop: '5rem' }} />) : (<>   <h2 className='main-hading'>LOGIN</h2>
          <p style={{ fontSize: '0.8rem' }}>you'll be loggedout automatically after 15min of idle time </p>
          <div className='main-containt'>
            <input type='number' name='mobile' className='input1' placeholder='mobile' onChange={handleOnchange} value={inputFiled.mobile} />
            <input type='password' name='password' className='input2' placeholder='Password' onChange={handleOnchange} value={inputFiled.password} />
            <button className='login-buton' onClick={handleOnClick}>Login</button>
          </div>
        </>)}
      </div>
    </>
  )
}
export default LoginForm
// {
//   "mobile":"8626014623",
//   "password":"admin123@"
// }
