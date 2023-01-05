import React, { Fragment, useEffect, useState } from "react";

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./../../../../AdminComponents/components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import { addStudent } from "./../../../../core/Services/AdminServices/StudentServices";

const AddStudent = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationalId, setNationalId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      fullName,
      email,
      password,
      phoneNumber,
      birthDate,
      nationalId,
    };
    try {
      const { status } = await addStudent(user);
      if (status === 200) {
        toast.success("کاربر با موفقیت اضافه شد", {
          position: "top-right",
          closeOnClick: "true",
        });
      }
    } catch (ex) {
      if (!window.navigator.onLine) {
        toast.error("check", {
          position: "top-right",
          closeOnClick: true,
        });
      }
      if (window.navigator.onLine) {
        toast.error("maghadir", {
          position: "top-right",
          closeOnClick: true,
        });
        console.log(ex);
      }
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <Sidebar />
          <form className="col-md-9 content" onSubmit={handleSubmit}>
            <div className="profile">
              <h4 className="updateInformationAdmin">افزودن دانش آموز</h4>
              <div className="userInformation">
                <div className="row">
                  <div className="col-md-6" id="email">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="birthDate"
                      placeholder="birthDate"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 call mb-2">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="fullName"
                      placeholder="fullname"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6" id="email">
                    <input
                      className="typeFormPanel"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6" id="call">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="phoneNumber"
                      placeholder="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6" id="email">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="email"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6" id="call">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="nationalId"
                      placeholder="nationalId"
                      value={nationalId}
                      onChange={(e) => setNationalId(e.target.value)}
                    />
                  </div>
                </div>
                <button className="updateAdmin" type="submit">
                  افزودن
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddStudent;
