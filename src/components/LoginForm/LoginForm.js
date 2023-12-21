import React, { useState } from "react";
import "./LoginForm.css";
import "react-toastify/dist/ReactToastify.css";
import { adminServices } from "../../services/admin.services";
import { useNavigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
function LoginForm() {
  const [inputFiled, setInputFiled] = useState({
    mobile: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const handleOnchange = (event) => {
    setInputFiled((prve) => {
      let helper = { ...prve };
      helper[event.target.name] = event.target.value;
      return helper;
    });
  };
  const handleOnClick = async () => {
    setLoading(true);
    try {
      const res = await adminServices.loginAPICall(inputFiled);
      if(res.data) {
      if (res.data.data.data.status === 200) {
        localStorage.setItem("token", JSON.stringify(res.data.data.data.token));
        if (localStorage.getItem("token") !== undefined) {
          navigate("/dashBoard");
        }
      }
    }else{
      toast.error(res.response.data.data.message);
      setLoading(false);
    }
      console.log(res, "res");
    } catch (error) {
      // else {
      //   console.log(res);
      //  
      // }
      console.log(error, "error");
    }
  };
  return (
    <>
      <div className="loginMainDiv">
        {loading ? (
          <Circles
            type="Oval"
            color="#00BFFF"
            height={50}
            width={50}
            style={{ marginTop: "5rem" }}
          />
        ) : (
          <>
            {" "}
            <h2 className="main-hading">LOGIN</h2>
            <p style={{ fontSize: "0.8rem" }}>
              you'll be loggedout automatically after 15min of idle time{" "}
            </p>
            <div className="main-containt">
              <input
                type="number"
                name="mobile"
                className="input1"
                placeholder="mobile"
                onChange={handleOnchange}
                value={inputFiled.mobile}
              />
              <input
                type="password"
                name="password"
                className="input2"
                placeholder="Password"
                onChange={handleOnchange}
                value={inputFiled.password}
              />
              <button className="login-buton" onClick={handleOnClick}>
                Login
              </button>
            </div>
          </>
        )}
          <ToastContainer />
      </div>
    </>
  );
}
export default LoginForm;
// {
//   "mobile":"8626014623",
//   "password":"admin123@"
// }
