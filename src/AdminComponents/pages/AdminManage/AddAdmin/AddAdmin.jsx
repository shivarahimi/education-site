import React, { Fragment, useState } from "react";

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./../../../../AdminComponents/components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import { addAdmin } from "../../../../core/Services/AdminServices/AdminServices";

const AddAdmin = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("teacher");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const adminDt = {
      fullName,
      email,
      password,
      phoneNumber,
      birthDate,
      nationalId,
      address,
      role,
    };
    console.log(adminDt);
    try {
      const { status } = await addAdmin(adminDt);
      if (status === 200) {
        toast.success("ادمین با موفقیت اضافه شد", {
          position: "top-right",
          closeOnClick: "true",
        });
      }
    } catch (error) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <Sidebar />
          <form className="col-md-9 content" onSubmit={handleSubmit}>
            <div className="profile">
              <h4 className="updateInformationAdmin">افزودن ادمین</h4>
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
                  <div className="col-md-6" id="call">
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
                      name="password"
                      placeholder="Password"
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
                <div className="row">
                  <div className="col-md-6" id="email">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="address"
                      placeholder="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6" id="call">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>نقش</option>
                      <option value={"teacher"}>مدرس</option>
                      <option value={"admin"}>ادمین</option>
                    </select>
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

export default AddAdmin;
