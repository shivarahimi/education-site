import React, { Fragment, useContext, useState } from "react";
import Loading from "../../AdminComponents/pages/Loading/Loading"
import "./../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserSideBar from "./TinyComponent/UserSideBar";
import { updateStudent } from "../../core/Services/UserServices/StudentService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../AdminComponents/context/UserContext/UserContext";

const UserInformation = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  // const [student, setUserData] = useState(userData);
  // const [id, setId] = useState([]);

  //     const LoadData = async () => {
  //     const id = localStorage.getItem("ID")
  //     const {data} = await getStudentByid(id)
  //     const result = data.result
  //     setUserData(result)
  //     setId(id)
  // }
  // const { pathname } = useLocation();

  // useEffect(() => {
  //     LoadData()
  // }, [pathname])

  const Property = (key, e) => {
    switch (key) {
      case "fullName":
        setUserData({ ...userData, fullName: e.target.value });
        break;
      case "phoneNumber":
        setUserData({ ...userData, phoneNumber: e.target.value });
        break;
      case "birthDate":
        setUserData({ ...userData, birthDate: e.target.value });
        break;
      case "nationalId":
        setUserData({ ...userData, nationalId: e.target.value });
        break;
      case "email":
        setUserData({ ...userData, email: e.target.value });
        break;
    }
  };

  const handleSubmit = async (event) => {
    OpenHandler();
    event.preventDefault();
    const Students = {
      fullName: userData.fullName,
      phoneNumber: userData.phoneNumber,
      birthDate: userData.birthDate,
      nationalId: userData.nationalId,
      email: userData.email,
    };
    try {
      const { status, data } = await updateStudent(Students, userData["_id"]);
      {
        setUserData(data.result);
      }
      if (data) {
        navigate("/userPanel/userDashboard");
      }
      if (status === 200) {
        toast.success("کاربر با موفقیت به روزرسانی شد", {
          position: "top-right",
          closeOnClick: "true",
        });
        CloseHandler();
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
      <Loading true={True} />
      {!userData ? (
        <></>
      ) : (
        <div className="container">
          <div className="row">
            <UserSideBar />
            <form className="col-md-9 content" onSubmit={handleSubmit}>
              <div className="profile">
                <h4 className="updateInformation">ویرایش حساب کاربری</h4>
                <div className="userInformation">
                  <div className="row">
                    <div className="col-md-6" id="email">
                      <input
                        className="typeFormPanel"
                        type="text"
                        name="birthDate"
                        placeholder="birthDate"
                        value={userData.birthDate}
                        onChange={(e) => {
                          Property("birthDate", e);
                        }}
                      />
                    </div>
                    <div className="col-md-6 email mb-2">
                      <input
                        className="typeFormPanel"
                        type="text"
                        name="fullName"
                        placeholder="fullname"
                        value={userData.fullName}
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
                        value={userData.email}
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
                        value={userData.phoneNumber}
                        onChange={(e) => {
                          Property("phoneNumber", e);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6" id="email">
                      <input
                        className="typeFormPanel"
                        type="text"
                        name="nationalId"
                        placeholder="nationalId"
                        value={userData.nationalId}
                        onChange={(e) => {
                          Property("nationalId", e);
                        }}
                      />
                    </div>
                  </div>
                  <button className="update" type="submit">
                    ویرایش اطلاعات
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UserInformation;
