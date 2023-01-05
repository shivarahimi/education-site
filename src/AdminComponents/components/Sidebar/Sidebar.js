import React, { Fragment, useState } from "react";
import "./../../../AdminComponents/components/Sidebar/Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminHeader from "../Header/AdminHeader";
import SidebarItem from "./SidebarItem";
import { items } from "./components/SidebarLink/SidebarLink";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext/AdminContext";

const Sidebar = () => {
  const { adminData, setAdminData, setAdminToken } = useContext(AdminContext);
  const [admin, setAdmin] = useState(adminData);
  //   const [id, setId] = useState(adminData["_id"]);
  //   const [admin, setAdmin] = useState();
  //   const [id, setId] = useState([]);

  const [sidebar, setUserSidebar] = useState(false);
  const openUserPanelMenu = () => setUserSidebar(!sidebar);
  // const LoadData = async () => {
  //     const id = localStorage.getItem("ID")
  //     const {data} = await getAdminByid(id)
  //     const result = data.result
  //     setAdmin(result)
  //     setId(id)
  // }
  // useEffect(() => {
  //     LoadData()
  // }, [])
  return (
    <Fragment>
      <AdminHeader Click={openUserPanelMenu} />
      <div className="contain col-12 col-md-3">
        <div className={sidebar ? "sidebar active" : "sidebar"}>
          <h6 className="adminPanel text-center">star Learn</h6>
          <div className="nameAdmin p-3">
            <div className="picturePanel-admin d-flex flex-column">
              <img
                src={require("../../../Assets/UserAssets/UserPanel/UserSideBar/User-avatar.svg.png")}
                alt=""
              />
              <p style={{ color: "rgb(165, 162, 162)", padding: "5px" }}>
                {admin.fullName}
              </p>
            </div>
          </div>
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
