import React from 'react'
import { adminServices } from '../../services/admin.services'
function LoginForm() {
  return (

    <>
      <div>LoginForm</div>
      <input type="email" />
      <button onClick={() => adminServices.loginAPICall("eve.holt@reqres.in", "pistol")}>login</button>
    </>
  )
}

export default LoginForm