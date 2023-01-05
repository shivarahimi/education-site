import React, { useState } from "react";
import "./../../../../../src/style/UserStyle/UserContent/Auth/RegisterUser.css";
import { registerUser } from "./../../../../core/Services/UserServices/UserGeneralServices";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import transition from "react-element-popper/animations/transition";

const RegisterUser = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [showPass, setShowPass] = useState("password");
  const handelShowPass = () => {
    if (showPass === "password") {
      setShowPass("text");
    }
    if (showPass === "text") {
      setShowPass("password");
    }
  };

  const userRegister = async (event) => {
    event.preventDefault();
    const user = {
      fullName,
      email,
      password,
      phoneNumber,
      birthDate: `${birthDate.year}/${
        birthDate.month.number > 9
          ? `${birthDate.month.number}`
          : `0${birthDate.month.number}`
      }/${birthDate.day > 9 ? `${birthDate.day}` : `0${birthDate.day}`}`,
      nationalId,
    };
    try {
      const { status } = await registerUser(user);
      if (status === 200) {
        toast.success("کاربر با موفقیت اضافه شد", {
          position: "top-right",
          closeOnClick: "true",
        });
        navigate("/home/login");
      }
    } catch (ex) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
      console.log(ex);
    }
  };
  return (
    <div className="containerRegister">
      <div className="row page align-items-center">
        <div className="Registerpicture col-12 col-xl-6">
          <img
            src={require("../../../../Assets/UserAssets/UserContent/Auth/close-up-female-student-typing-laptop-table_1262-3468.jpg")}
            alt=""
          />
        </div>
        <div className="col-12 col-xl-6">
          <h3 className="Registertitle">ثبت نام</h3>
          <form id="form" onSubmit={userRegister}>
            <div className="row Registerusername">
              <div className="col-md-12">
                <input
                  className="typeRegister"
                  type="text"
                  name="fullName"
                  placeholder="fullname"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
            </div>
            <div className="row" id="id">
              <div className="col-md-12">
                <input
                  className="typeRegister"
                  type="text"
                  name="nationalId"
                  placeholder="nationalId"
                  value={nationalId}
                  onChange={(event) => setNationalId(event.target.value)}
                />
              </div>
            </div>
            <div className="row" id="birth">
              <DatePicker
                style={{ width: "100%", textAlign: "right" }}
                value={birthDate}
                placeholder="birthDate"
                onChange={setBirthDate}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                className="prime"
                animations={[transition()]}
              />
              {/* <input
                className="typeRegister"
                type="text"
                name="birthDate"
                placeholder="birthDate"
                value={birthDate}
                onChange={(event) => {
                  setBirthDate(event.target.value);
                }}
              /> */}
            </div>
            <div className="row" id="email">
              <div className="col-md-12">
                <input
                  className="typeRegister"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row" id="password">
              <div className="col-md-12" style={{ position: "relative" }}>
                {showPass === "password" ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="eye"
                    onClick={handelShowPass}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="eye"
                    onClick={handelShowPass}
                  />
                )}
                <input
                  className="typeRegister"
                  type={showPass}
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="row" id="call">
              <div className="col-md-12">
                <input
                  className="typeRegister"
                  type="text"
                  name="phoneNumber"
                  placeholder="phoneNumber"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
            </div>
            <div className="row login">
              <div className="col-md-12">
                <button id="sendBtn" type="submit">
                  ثبت نام
                </button>
              </div>
            </div>
            <div className="row register">
              <div className="col-md-4 d-flex justify-content-start">
                <Link to="/" className="reg">
                  صفحه اصلی
                </Link>
              </div>
              <div className="col-md-8">
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

export default RegisterUser;
