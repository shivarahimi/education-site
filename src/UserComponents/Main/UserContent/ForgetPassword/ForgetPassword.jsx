import React, { useState } from "react";

import "./../../../../style/UserStyle/UserContent/Auth/ForgetPassword.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const reset = () => {
    setEmail("");
  };
  const userForgetpassword = async (event) => {
    event.preventDefault();
    const user = {
      email,
    };
    console.log(user);
  };
  return (
    <div className="containerForgetpassword">
      <div className="row page align-items-center">
        <div className="Loginpicture col-12 col-xl-6">
          <img
            src={require("../../../../Assets/UserAssets/UserContent/Auth/close-up-female-student-typing-laptop-table_1262-3468.jpg")}
            alt=""
          />
        </div>
        <div className="col-12 col-xl-6">
          <h3 className="title">فراموشی رمز</h3>
          <form id="form" onSubmit={userForgetpassword}>
            <div className="row" id="email">
              <div className="col-md-12">
                <input
                  className="typeForm"
                  type="email"
                  placeholder="Example@gmail.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="row login">
              <div className="col-md-12">
                <button id="sendBtn" type="submit">
                  فراموشی رمز
                </button>
              </div>
            </div>
            <div className="row register">
              <div className="col-md-12">
                <Link to="/home/login" className="reg">
                  ورود
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
