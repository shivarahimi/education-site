import React, { Fragment, useContext, useEffect, useState } from "react";
import "./../../../AdminComponents/pages/dashboard/Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./../../../AdminComponents/components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { updateAdmin } from "../../../core/Services/AdminServices/AdminServices";
import { AdminContext } from "./../../context/AdminContext/AdminContext";
import Loading from "../../../AdminComponents/pages/Loading/Loading"

const Dashboard = () => {
  const { adminData, setAdminData } = useContext(AdminContext);
  // const [admin, setAdmin] = useState(adminData);
  // const [id, setId] = useState(adminData["_id"]);
  // const[admins,setAdmins] = useState([])

  // const LoadDatas = async () => {
  //     try {
  //         const {data} = await getAllAdmin()
  //         const result = data.result
  //         setAdmins(result)
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // useEffect(() => {
  //     LoadData()
  //     LoadDatas()
  // },[])
  //     const LoadData = async () => {
  //     const id = localStorage.getItem("ID")
  //     const {data} = await getAdminByid(id)
  //     const result = data.result
  //     setAdmin(result)
  //     setId(id)
  // }
  const { pathname } = useLocation();

  useEffect(() => {
    // LoadData()
  }, [pathname]);

  const Property = (key, e) => {
    switch (key) {
      case "fullName":
        setAdminData({ ...adminData, fullName: e.target.value });
        break;
      case "phoneNumber":
        setAdminData({ ...adminData, phoneNumber: e.target.value });
        break;
      case "birthDate":
        setAdminData({ ...adminData, birthDate: e.target.value });
        break;
      case "nationalId":
        setAdminData({ ...adminData, nationalId: e.target.value });
        break;
      case "email":
        setAdminData({ ...adminData, email: e.target.value });
        break;
      case "address":
        setAdminData({ ...adminData, address: e.target.value });
        break;
    }
  };

  const handleSubmit = async (event) => {
    OpenHandler();
    event.preventDefault();
    const Admins = {
      fullName: adminData.fullName,
      phoneNumber: adminData.phoneNumber,
      birthDate: adminData.birthDate,
      nationalId: adminData.nationalId,
      email: adminData.email,
      address: adminData.address,
    };
    try {
      const { data, status } = await updateAdmin(Admins, adminData["_id"]);
      {
        setAdminData(data.result);
      }
      if (status === 200) {
        toast.success("مدرس با موفقیت ویرایش شد", {
          position: "top-right",
          closeOnClick: "true",
        });
        CloseHandler();
        // LoadDatas()
        // LoadData()
      }
    } catch (ex) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
      CloseHandler();
    }
  };
  const [True, SetTrue] = useState(false);
  const CloseHandler = () => {
    SetTrue(false);
  };
  const OpenHandler = () => {
    SetTrue(true);
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
        <Loading true={True} />
          <Sidebar />
          <form className="col-md-9 content" onSubmit={handleSubmit}>
            <div className="profile">
              <h4 className="updateInformationAdmin">داشبورد</h4>
              <div className="userInformation">
                <div className="row">
                  <div className="col-md-6" id="email">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="birthDate"
                      placeholder="birthDate"
                      value={adminData.birthDate}
                      onChange={(e) => {
                        Property("birthDate", e);
                      }}
                    />
                  </div>
                  <div className="col-md-6" id="call">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="fullName"
                      placeholder="fullname"
                      value={adminData.fullName}
                      onChange={(e) => {
                        Property("fullName", e);
                      }}
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
                      value={adminData.email}
                      onChange={(e) => {
                        Property("email", e);
                      }}
                    />
                  </div>
                  <div className="col-md-6" id="call">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="phoneNumber"
                      placeholder="phoneNumber"
                      value={adminData.phoneNumber}
                      onChange={(e) => {
                        Property("phoneNumber", e);
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6" id="call">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="phoneNumber"
                      placeholder="address"
                      value={adminData.address}
                      onChange={(e) => {
                        Property("address", e);
                      }}
                    />
                  </div>
                  <div className="col-md-6" id="email">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="email"
                      placeholder="nationalId"
                      value={adminData.nationalId}
                      onChange={(e) => {
                        Property("nationalId", e);
                      }}
                    />
                  </div>
                </div>
                <button className="updateAdmin" type="submit">
                  ثبت تغییرات
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
