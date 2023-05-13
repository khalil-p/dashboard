import React, { useState } from 'react'
import './LoginForm.css'

function LoginForm() {
  const [inputFiled, setInputFiled] = useState({
    number: '', password: ''
  })

  const handleOnchange = (event) => {
    setInputFiled((prve) => {
      let helper = { ...prve }
      helper[event.target.name] = event.target.value
      return helper
    })
  }
  const handleOnClick = () => {
    console.log(inputFiled);
  }

  return (
    <>
      <h2 className='main-hading'>LOGIN</h2>
      <div className='main-containt'>
        <input type='number' name='number' className='input1' placeholder='Number' onChange={handleOnchange} value={inputFiled.number} />
        <input type='password' name='password' className='input2' placeholder='Password' onChange={handleOnchange} value={inputFiled.password} />
        <button className='login-buton' onClick={handleOnClick}>login</button>
      </div>
    </>
  )
}

export default LoginForm
