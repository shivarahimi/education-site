import React, { Fragment, useContext, useEffect, useState } from "react";

import "./../../../style/UserStyle/UserPanel/UserSideBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserHeader from "./UserHeader";
import { getStudentByid } from "../../../core/Services/UserServices/StudentService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faFilePen,
  faUser,
  faRightFromBracket,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { removeCooki } from "../../../AdminComponents/context/UserContext/cooki";
import { UserContext } from "../../../AdminComponents/context/UserContext/UserContext";

const UserSideBar = () => {
  const navigate = useNavigate();
  const { userData, setUserData, setUserToken, userToken } =
    useContext(UserContext);
  const [student, setStudent] = useState(userData);
  // const studentsDetaile = async () => {
  //     const id = localStorage.getItem("ID")
  //     const {data} = await getStudentByid(id)
  //     const result = data.result
  //     setStudent(result)
  // }
  // useEffect(() => {
  //     studentsDetaile()
  // },[])

  const Logout = () => {
    removeCooki("user-token", `${userToken}`, "/", 2);
    setUserToken(null);
    setUserData(null);
    navigate("/");
    // localStorage.clear()
    toast.success("خروج موفقیت آمیز بود", {
      position: "top-right",
      closeOnClick: "true",
    });
  };
  const [sidebar, setUserSidebar] = useState(false);
  const openUserPanelMenu = () => setUserSidebar(!sidebar);

  return (
    <Fragment>
      <UserHeader Click={openUserPanelMenu} />
      <div className="contain col-md-3 col-xl-3">
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          <h6 className="userPanel text-center">پنل دانش آموز</h6>
          <div className="userPanelInfo">
            <div className="name">
              <div className="picturePanel">
                <img
                  src={require("../../../Assets/UserAssets/UserPanel/UserSideBar/User-avatar.svg.png")}
                  alt=""
                />
              </div>
              <p className="m-3">{student.fullName}</p>
            </div>
            <div className="select p-2">
              <Link to="/userPanel/userDashboard">
                <p className="panelOption">
                  مشاهده حساب کاربری
                  <FontAwesomeIcon className="userSidebarIcon" icon={faUser} />
                </p>
              </Link>
              <Link to="/userPanel/userInformation">
                <p className="panelOption">
                  ویرایش حساب کاربری
                  <FontAwesomeIcon
                    className="userSidebarIcon"
                    icon={faFilePen}
                  />
                </p>
              </Link>
              <Link to="/home/courseList">
                <p className="panelOption">
                  همه دوره ها
                  <FontAwesomeIcon
                    className="userSidebarIcon"
                    icon={faBook}
                  />
                </p>
              </Link>
              <Link to="/userPanel/userCourse">
                <p className="panelOption">
                  دوره های خریداری شده
                  <FontAwesomeIcon
                    className="userSidebarIcon"
                    icon={faBookOpenReader}
                  />
                </p>
              </Link>
              <p className="panelOption" onClick={Logout}>
                خروج
                <FontAwesomeIcon
                  className="userSidebarIcon"
                  icon={faRightFromBracket}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserSideBar;
